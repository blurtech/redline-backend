let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
        _id: Schema.ObjectId,
        login: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        name: String,
        preferences: [String]
    });

module.exports = mongoose.model('users', userSchema);