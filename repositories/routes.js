const Routes = require('../models/routes');

exports.getRedLine = (city) => Routes.find( {'city': city} );

exports.getCities = () => Routes.find().distinct('city', {});