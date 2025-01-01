// const { model } = require('mongoose');
// const PositionsSchema = require('../schemas/PositionsSchema'); // Correct path to your schema file

// const PositionsModel = model('position', PositionsSchema); // Use lowercase for model name if that's what you're querying

// module.exports = PositionsModel;


const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  value: { type: Number, required: true },
});

const PositionsModel = mongoose.model("Positions", PositionSchema);

module.exports = PositionsModel;


