// const { model } = require('mongoose');
// const HoldingsSchema = require('../schemas/HoldingSchemas'); // Import the schema

// const HoldingsModel = model("holding", HoldingsSchema); // Register the model with the schema

// module.exports = HoldingsModel; // Export the model directly


const mongoose = require("mongoose");

const HoldingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number, required: true },
  value: { type: Number, required: true },
});

const HoldingsModel = mongoose.model("Holdings", HoldingSchema);

module.exports = HoldingsModel;

