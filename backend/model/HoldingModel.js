const mongoose = require("mongoose");

const HoldingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number, required: true },
  value: { type: Number, required: true },
});

const HoldingsModel = mongoose.model("Holdings", HoldingSchema);

module.exports = HoldingsModel;

