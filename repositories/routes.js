const Routes = require('../models/route');

exports.getRedLines = (city) => Routes.find( {'city': city} );

exports.getCities = () => Routes.find().distinct('city', {});

exports.getAllRoutes = () => Routes.find({});
