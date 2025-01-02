const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  value: { type: Number, required: true },
});

const PositionsModel = mongoose.model("Positions", PositionSchema);

module.exports = PositionsModel;


