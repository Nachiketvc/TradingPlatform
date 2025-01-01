// const { Schema } = require('mongoose');

// const HoldingsSchema = new Schema({
//   name: String,
//   qty: Number,
//   avg: Number,
//   price: Number,
//   net: String,
//   day: String,
// });


const mongoose = require('mongoose'); // Import mongoose

const HoldingsSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Stock name
  qty: { type: Number, required: true },  // Quantity
  avg: { type: Number, required: true },  // Average cost
  value: { type: Number, required: true }, // Current value
});

module.exports = HoldingsSchema;




