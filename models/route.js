const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const dbref = require("mongoose-dbref");
const DBRef = mongoose.SchemaTypes.DBRef;

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
        {type: Schema.ObjectId, ref: 'showplaces'}
    ]
});
module.exports = mongoose.model('routes', routeSchema);