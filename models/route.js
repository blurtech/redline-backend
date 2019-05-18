const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const showplace = require("./showplace");

let routeSchema = new Schema({
    _id: Schema.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    geos: [showplace.schema]
});
module.exports = mongoose.model('routes', routeSchema);