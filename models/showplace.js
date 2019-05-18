const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let showplaceSchema = new Schema({
    _id: Schema.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    geo: {
        type: [Number],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("showplaces", showplaceSchema);