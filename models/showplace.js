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
    tags: {
        type: [String],
        required: true
    },
    geo: {
/*<<<<<<< HEAD
        type:{
            longitude: {
                type: Number,
                required: true
            },
            latitude: {
                type: Number,
                required: true
            }
        },
=======*/
        type: [Number],
//>>>>>>> 2d8a3b9d1f9402af0c2eefb72c8146752a65377a
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