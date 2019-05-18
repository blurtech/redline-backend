const Users = require('../models/user');

exports.getUserById = (id) => Users.findById( id, {'password': 0} );

exports.authorize = (login, password) => Users.findOne( {'login': login, 'password': password} ) == True;