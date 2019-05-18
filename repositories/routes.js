const Routes = require('../models/routes');

exports.getRedLine = (city) => Routes.find( {'city': city, 'name': "Red Line"} );

exports.getCities = () => Routes.find().distinct('city', {});