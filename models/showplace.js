const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let showplaceSchema = new Schema({
    id: Schema.ObjectId,
    name: {
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
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("showplaces", showplaceSchema);