const Showplace = require('../models/showplace');

exports.getAllTags = () => Showplace.model.distinct('tags');

exports.getShowplaces = () => Showplace.model.find();

exports.getShowplacesByTags = (tags) => Showplace.model.find({}, {});

exports.getShowplaceByCity = (city) => Showplace.model.find({city: city});

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

