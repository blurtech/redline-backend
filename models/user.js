let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
        login: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            default: "Вася Пупкин"
        },
        preferences: {
            type: [String],
            default: null
        }
    },
    { versionKey: false });

module.exports = mongoose.model('users', userSchema);
