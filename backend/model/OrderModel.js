// const {model} = require('mongoose');

// const OrdersSchema = require('../schemas/OrdersSchema');

// const OrdersModel = model("order", OrdersSchema);

// module.exports = OrdersModel;

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  mode: { type: String, required: true }, // BUY or SELL
  createdAt: { type: Date, default: Date.now },
});

const OrdersModel = mongoose.model("Orders", OrderSchema);

module.exports = OrdersModel;








