const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    description: { type: String },
    countAll: { type: Number, required: true },
    countNow: { type: Number },
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],  
    price: { type: Number, required: true },
    password: { type: String, required: true },
    organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
});

module.exports = mongoose.model('Parking', parkingSchema);