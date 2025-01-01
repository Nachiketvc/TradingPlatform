// const {Schema} = require('mongoose');

// const PositionsSchema = new Schema({
//     product: String,
//     name: String,
//     qty: Number,
//     avg: Number,
//     price: Number,
//     net: String,
//     day: String,
//     isLoss: Boolean,
// });

const mongoose = require('mongoose'); // Import mongoose

const PositionsSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Stock name
    qty: { type: Number, required: true },  // Quantity
    avg: { type: Number, required: true },  // Average cost
    value: { type: Number, required: true }, // Current value
});

module.exports = PositionsSchema;
