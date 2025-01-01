// const { Schema } = require('mongoose');

// // const OrdersSchema = new Schema({
// //   name: String,
// //   qty: Number,
// //   price: Number,
// //   mode: String,
// // });


// const mongoose = require('mongoose'); // Import mongoose

// const OrdersSchema = new mongoose.Schema({
//     name: { type: String, required: true }, // Stock name
//     qty: { type: Number, required: true },  // Quantity
//     price: { type: Number, required: true }, // Price at which the stock was bought/sold
//     mode: { type: String, required: true },  // Mode: BUY or SELL
// });


const OrdersSchema = new Schema({
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  

module.exports = OrdersSchema;


