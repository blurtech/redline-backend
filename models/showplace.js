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
/*
        type:{
            longitude: {
                type: Number,
                required: true
            },
            latitude: {
                type: Number,
                required: true
            }
        },*/
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

module.exports.model = mongoose.model("showplaces", showplaceSchema);
module.exports.schema = showplaceSchema;