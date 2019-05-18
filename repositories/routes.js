const Routes = require('../models/route');

exports.getRedLines = (city) => Routes.find( {'city': city, 'name': "Red Line"} );

exports.getCities = () => Routes.find().distinct('city', {});