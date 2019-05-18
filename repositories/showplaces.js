const Showplace = require('../models/showplace');

exports.getShowplaces = () => Showplace.find();

exports.getShowPlaceById = (id) => Showplace.findById(id);