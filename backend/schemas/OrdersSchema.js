const OrdersSchema = new Schema({
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  

module.exports = OrdersSchema;


