const repository = require('../repositories/routes');
const repositorysp = require('../repositories/showplaces');
const userRepository = require('../repositories/users');
const distance = require('google-distance-matrix');

let coordsToStr = (coords) => coords[0]+','+coords[1];

function getDistances(userSource, places){
    distance.mode('walking');
    distance.language('ru');

    distance.key('AIzaSyDVsJx-Hyq6w4laps9vUcA1gbq-mWLtH78');
    distance.units('metric');
    //for places as Showplace - places.map((val) => coordsToStr(val.geo))
    let params = [userSource].concat(places.map((val) => val.geo.toString()));
    //console.log(params);
    return new Promise(function (res, rej){
        distance.matrix(params, params,  function(err, dist) {
            res({
                "places": places,
                "distances": dist.rows
            });
        });
    });
}

exports.getRoutes = async (req, res) => {
    let routes = await repository.getRedLines(req.query.city);
    return res.success(routes);
};

exports.getCities = async (req, res) => {
    let cities = await repository.getCities();
    return res.success( {'cities': cities} );
};

exports.getAllRoutes = async (req, res) => {
    let routes = await repository.getAllRoutes();
    return res.success(routes);
};

exports.createRoutes = async (req, res) => {
    //get places
    let city = req.query.city;
    let longitude  = req.query.longitude;
    let latitude = req.query.latitude;
    console.log(city);

    let prefs = userRepository.getUserById(req.params.id).preferences;

    let places = await repositorysp.getShowplaceByCity(city);
    console.log(places);

    await getDistances(longitude+','+latitude, places
    )
        .then((obj) => {
            //First destination
            let firstArr = obj.distances[0].elements.map((val) => val.distance.value === 0 ? null : val.distance.value);
            let minIndex=-1;
            let minValue = 9999999999;
            for( let i=0; i<firstArr.length; i++){
                if (!firstArr[i]){
                    continue;
                }
                if(firstArr[i]<minValue){
                    minValue = firstArr[i];
                    minIndex = i;
                }
            }
            //console.log(obj.places[minIndex-1]);
            //console.log(minIndex);
            obj.path = [].concat(obj.places[minIndex-1]);
            obj.currItem = minIndex;
            obj.distances[0] = { elements: Array(obj.places.length+1).fill(null)};
            for (let i=1; i<obj.places.length+1; i++){
                obj.distances[i].elements[0] = null;
            }
            return obj;
        }
    )
        .then((obj) => {
            while (obj.places.length !== obj.path.length) {
                //console.log(obj.distances);
                //console.log(obj.currItem);
                let Arr = obj.distances[obj.currItem].elements.map((val) => !val || val.distance ===0 ? null : val.distance.value);
                let minIndex=-1;
                let minValue = 9999999999999;
                for( let i=0; i<Arr.length; i++){
                    if (!Arr[i]){
                        continue;
                    }
                    if(Arr[i]<minValue){
                        minValue = Arr[i];
                        minIndex = i;
                    }
                }
                //console.log(obj.places[minIndex-1]);
                obj.path.push(obj.places[minIndex-1]);
                obj.distances[obj.currItem] = { elements: Array(obj.places.length+1).fill(null)};
                for (let i=1; i<obj.places.length+1; i++){
                    obj.distances[i].elements[obj.currItem] = null;
                }
                obj.currItem = minIndex;
            }
            res.send(obj.path);
        });
};