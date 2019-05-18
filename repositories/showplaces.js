const Showplace = require('../models/showplace');

exports.getShowplaces = () => Showplace.find();

exports.getShowPlaceById = (id) => Showplace.findById(id);

exports.createShowplace = (body) =>
    Showplace.create( {
        'name': body.name,
        'description': body.description,
        'tags': body.tags,
        'geo': body.geo,
        'address': body.address,
        'city': body.city
    });