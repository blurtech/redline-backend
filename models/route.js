const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let routeSchema = new Schema({
    id: Schema.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    geos: [
        {
            name: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            geo: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            }
        }
    ]

});

module.exports = mongoose.model("routes", routeSchema);