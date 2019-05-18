const Routes = require('../models/route');

exports.getRedLines = (city) => Routes.find( {'city': city}, {_id: 1, name: 1, city: 1, description: 1, geo: 1, address: 1, tags: 1} );

exports.getCities = () => Routes.find().distinct('city', {});

exports.getAllRoutes = () => Routes.find({});

exports.createRoute = (name, description, routes) => {
    let newRoute = new Routes({
        "name": name,
        "description": description,
        "geos": routes
    });

    newRoute.save(function (err) {
        if (err) return err;
    });
};
