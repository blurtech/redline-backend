const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    geos: [
        {type: Schema.ObjectId, ref: 'showplaces'}
        ]
});
module.exports = mongoose.model('routes', routeSchema);