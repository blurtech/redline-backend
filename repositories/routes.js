const Routes = require('../models/route');

exports.getRedLines = (city) => Routes.find( {'city': city} );

exports.getCities = () => Routes.find().distinct('city', {});

exports.getAllRoutes = () => Routes.find({});

exports.createRoute = (routes) => Routes.create({
    "name": "Бухло-трип",
    "description": "Бухач-трип",
    "geos": routes.map((val)=> val._id),
});
