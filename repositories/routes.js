const Routes = require('../models/route');

exports.getRedLines = (city) => Routes.find( {'city': city});

exports.getCities = () => Routes.find().distinct('city', {});

exports.getAllRoutes = () => Routes.find({});

exports.createRoute = (name, description, routes) => { //Routes - массив showplace
    let newRoute = new Routes({
        "name": name,
        "description": description,
        "geos": routes
    });

    newRoute.save(function (err) {
        if (err) return err;
    });
};
