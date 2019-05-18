const Routes = require('../models/route');

exports.getRedLine = (city) => Routes.find( {'city': city} );

exports.getCities = () => Routes.find().distinct('city', {});
