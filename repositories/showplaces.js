const Showplace = require('../models/showplace');

exports.allTags = () => Showplace.distinct('tags');

