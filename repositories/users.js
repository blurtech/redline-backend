const Users = require('../models/user');

exports.getUserById = (id) => Users.findById( id, {'password': 0} );

exports.authorize = (login, password) => Users.find( {'login': login, 'password': password} ).count() > 0;