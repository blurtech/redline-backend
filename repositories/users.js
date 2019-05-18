const Users = require('../models/user');

exports.getUserById = (id) => Users.findById( id, {'password': 0} );

exports.register = (login, password, name, preferences) => Users.create({login: login, password: password, name: name, preferences: preferences});

exports.authorize = (login, password) => Users.findOne( {'login': login, 'password': password}, {'_id': 1} );