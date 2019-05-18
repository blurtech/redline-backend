const Showplace = require('../models/showplace');

exports.getAllTags = () => Showplace.model.distinct('tags');

exports.getShowplaces = () => Showplace.model.find();

exports.getShowPlaceById = (id) => Showplace.model.findById(id);

exports.createShowplace = (body) =>
    Showplace.model.create( {
        'name': body.name,
        'description': body.description,
        'tags': body.tags,
        'geo': body.geo,
        'address': body.address,
        'city': body.city
    });

