// const { config } = require("dotenv");
// const express = require("express");

// require('dotenv').config();
// const mongoose = require('mongoose');

// const bodyParser = require('body-parser');
// const cors = require('cors');

// const HoldingsModel = require('./model/HoldingModel');
// const PositionsModel = require('./model/PositionModel');
// const OrdersModel = require('./model/OrderModel');

// const AuthRouter = require('./Routers/AuthRouter');
// const ProductRouter = require('./Routers/ProductRouter');
// require('./model/User');

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());




// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("DB Connected");
//     })
//     .catch(err => {
//         console.error("Database connection error:", err);
//     });


// not to remove
// app.get('/addHoldings', async (req, res) => {
//   let tempHoldings = [
//     {
//         name: "BHARTIARTL",
//         qty: 2,
//         avg: 538.05,
//         price: 541.15,
//         net: "+0.58%",
//         day: "+2.99%",
//       },
//       {
//         name: "HDFCBANK",
//         qty: 2,
//         avg: 1383.4,
//         price: 1522.35,
//         net: "+10.04%",
//         day: "+0.11%",
//       },
//       {
//         name: "HINDUNILVR",
//         qty: 1,
//         avg: 2335.85,
//         price: 2417.4,
//         net: "+3.49%",
//         day: "+0.21%",
//       },
//       {
//         name: "INFY",
//         qty: 1,
//         avg: 1350.5,
//         price: 1555.45,
//         net: "+15.18%",
//         day: "-1.60%",
//         isLoss: true,
//       },
//       {
//         name: "ITC",
//         qty: 5,
//         avg: 202.0,
//         price: 207.9,
//         net: "+2.92%",
//         day: "+0.80%",
//       },
//       {
//         name: "KPITTECH",
//         qty: 5,
//         avg: 250.3,
//         price: 266.45,
//         net: "+6.45%",
//         day: "+3.54%",
//       },
//       {
//         name: "M&M",
//         qty: 2,
//         avg: 809.9,
//         price: 779.8,
//         net: "-3.72%",
//         day: "-0.01%",
//         isLoss: true,
//       },
//       {
//         name: "RELIANCE",
//         qty: 1,
//         avg: 2193.7,
//         price: 2112.4,
//         net: "-3.71%",
//         day: "+1.44%",
//       },
//       {
//         name: "SBIN",
//         qty: 4,
//         avg: 324.35,
//         price: 430.2,
//         net: "+32.63%",
//         day: "-0.34%",
//         isLoss: true,
//       },
//       {
//         name: "SGBMAY29",
//         qty: 2,
//         avg: 4727.0,
//         price: 4719.0,
//         net: "-0.17%",
//         day: "+0.15%",
//       },
//       {
//         name: "TATAPOWER",
//         qty: 5,
//         avg: 104.2,
//         price: 124.15,
//         net: "+19.15%",
//         day: "-0.24%",
//         isLoss: true,
//       },
//       {
//         name: "TCS",
//         qty: 1,
//         avg: 3041.7,
//         price: 3194.8,
//         net: "+5.03%",
//         day: "-0.25%",
//         isLoss: true,
//       },
//       {
//         name: "WIPRO",
//         qty: 4,
//         avg: 489.3,
//         price: 577.75,
//         net: "+18.08%",
//         day: "+0.32%",
//       },
//   ];

//   try {
//     tempHoldings.forEach(async (item) => {
//       let newHolding = new HoldingsModel({
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//       });
//       await newHolding.save(); // Await each save
//     });
//     res.send('Done!');
//   } catch (err) {
//     console.error("Error saving holdings:", err);
//     res.status(500).send("Error saving holdings.");
//   }
// });

// console.log('-------')

// not to remove
// app.get('/addPositions', async (req, res) => {
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//           },
//           {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//           },
//     ];

//     try {
//       tempPositions.forEach(async (item) => {
//         let newPosition = new PositionsModel({
//           product: item.product,
//           name: item.name,
//           qty: item.qty,
//           avg: item.avg,
//           price: item.price,
//           net: item.net,
//           day: item.day,
//           isLoss: item.isLoss || false, // Default to false if not provided
//         });
//         await newPosition.save(); // Await each save
//       });
//       res.send('Positions added successfully!');
//     } catch (err) {
//       console.error("Error saving positions:", err);
//       res.status(500).send("Error saving positions.");
//     }
//   });

// console.log('------------------')

// // we have fetched the data from MongoDB
// app.get('/allHoldings', async (req, res) => {
//     const allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
// });


// app.get('/allPositions', async (req, res) => {
//     const allPositions = await PositionsModel.find({});
//     res.json(allPositions);
// });


// app.post('/allOrders', async (req, res) => {
//     const allOrders = new OrdersModel({
//         name: req.body.name,
//         qty: req.body.qty,
//         price: req.body.price,
//         mode: req.body.mode,
//         addTo: req.body.addTo,
//     });

//     allOrders.save()
//     res.send('Orders Data Saved!')
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require("dotenv").config();

// const HoldingsModel = require("./model/HoldingModel");
// const PositionsModel = require("./model/PositionModel");
// const OrdersModel = require("./model/OrderModel");

// // Routers for auth, products, etc.
// const AuthRouter = require('./Routers/AuthRouter');
// const ProductRouter = require('./Routers/ProductRouter');

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect(uri)
//   .then(() => console.log("DB Connected"))
//   .catch((err) => console.error("Database connection error:", err));

// // Utility function to update holdings (if needed)
// async function updateHoldings({ name, qty, price }) {
//   const avgCost = price;
//   const totalValue = qty * price;

//   let holding = await HoldingsModel.findOne({ name });
//   if (holding) {
//     const newQty = holding.qty + qty;
//     const newAvg = (holding.avg * holding.qty + avgCost * qty) / newQty;
//     const newValue = newQty * price;

//     holding.qty = newQty;
//     holding.avg = newAvg;
//     holding.value = newValue;
//     await holding.save();
//   } else {
//     const newHolding = new HoldingsModel({
//       name,
//       qty,
//       avg: avgCost,
//       value: totalValue,
//     });
//     await newHolding.save();
//   }
// }

// // Utility function to handle buy transactions (add stock to Positions)
// async function handleBuyTransaction({ name, qty, price, addTo }) {
//   const totalValue = qty * price;

//   // Check if we are adding to the 'Positions' collection
//   if (addTo === "Positions") {
//     let position = await PositionsModel.findOne({ name });

//     if (position) {
//       // Update the existing position in the Positions collection
//       const newQty = position.qty + qty;
//       const newValue = newQty * price; // Update position value based on new quantity

//       position.qty = newQty;
//       position.value = newValue;
//       position.price = price; // Set the new price (or average price if required)
//       await position.save();
//     } else {
//       // If no position exists, create a new position
//       const newPosition = new PositionsModel({
//         name,
//         qty,
//         price, // average price of the stock at the time of buying
//         value: totalValue,
//       });
//       await newPosition.save();
//     }
//   }

//   // Save the buy order in the Orders collection
//   const newOrder = new OrdersModel({
//     name,
//     qty,
//     price,
//     mode: "BUY",
//     createdAt: new Date(),
//   });
//   await newOrder.save();
// }

// // Utility function to handle sell transactions (remove from Positions)
// async function handleSellTransaction({ name, qty, price, removeFrom }) {
//   const Model = removeFrom === "Holdings" ? HoldingsModel : PositionsModel;
//   const stock = await Model.findOne({ name });

//   if (!stock || stock.qty < qty) {
//     throw new Error("Insufficient quantity available.");
//   }

//   const newQty = stock.qty - qty;

//   if (newQty > 0) {
//     stock.qty = newQty;
//     stock.value = newQty * stock.avg; // Update value based on new quantity
//     await stock.save();
//   } else {
//     await Model.deleteOne({ name }); // Remove the stock if quantity becomes zero
//   }

//   // Save the sell transaction to the orders collection
//   const newOrder = new OrdersModel({
//     name,
//     qty,
//     price,
//     mode: "SELL",
//     createdAt: new Date(),
//   });
//   await newOrder.save();
// }

// // Route to fetch all holdings
// app.get("/allHoldings", async (req, res) => {
//   try {
//     const allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
//   } catch (err) {
//     res.status(500).send("Error fetching holdings data.");
//   }
// });

// // Route to fetch all positions
// app.get("/allPositions", async (req, res) => {
//   try {
//     const allPositions = await PositionsModel.find({});
//     res.json(allPositions);
//   } catch (err) {
//     res.status(500).send("Error fetching positions data.");
//   }
// });

// // Route to handle order creation (buy stocks)
// app.post("/allOrders", async (req, res) => {
//   try {
//     const { name, qty, price, mode, addTo } = req.body;

//     // Validate that mode is 'BUY' and addTo is 'Positions'
//     if (mode === "BUY" && addTo === "Positions") {
//       // Call the handleBuyTransaction function to update positions
//       await handleBuyTransaction({ name, qty, price, addTo });

//       // Fetch updated positions and send back
//       const updatedPositions = await PositionsModel.find({});
//       res.status(200).json({ updatedPositions });
//     } else {
//       res.status(400).send("Invalid operation or addTo value.");
//     }
//   } catch (error) {
//     console.error("Error processing order:", error);
//     res.status(500).send("Internal server error");
//   }
// });

// // Route to handle sell stock
// app.post("/sellStock", async (req, res) => {
//   const { name, qty, price, removeFrom } = req.body;

//   try {
//     await handleSellTransaction({ name, qty, price, removeFrom });

//     // Fetch updated positions or holdings
//     const updatedData = await PositionsModel.find({});
//     res.status(200).json({ updatedData, message: "Stock sold successfully." });
//   } catch (error) {
//     console.error("Error processing sell stock:", error.message);
//     res.status(400).json({ error: error.message });
//   }
// });

// // Route to fetch all orders
// app.get("/allOrders", async (req, res) => {
//   try {
//     const allOrders = await OrdersModel.find({}).sort({ createdAt: -1 }); // Fetch orders sorted by most recent
//     res.json(allOrders);
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     res.status(500).send("Error fetching orders.");
//   }
// });

// // Use authentication and product routers
// app.use('/auth', AuthRouter);
// app.use('/products', ProductRouter);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`App started on http://localhost:${PORT}`);
// });


// mongoose.connect(uri).then(async () => {
//   const test = await PositionsModel.find({});
//   console.log(test); // Should return an array (empty or with documents)
// });


// / working fine below - 


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const HoldingsModel = require("./model/HoldingModel");
const PositionsModel = require("./model/PositionModel");
const OrdersModel = require("./model/OrderModel");

// Routers for auth, products, etc.
const AuthRouter = require('./Routers/AuthRouter');
const ProductRouter = require('./Routers/ProductRouter');

const feedbackRoutes = require('./Routers/feedback');



const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(bodyParser.json());

app.use(cors({
  origin: ['https://trading-platform-kappa.vercel.app/'], // Frontend dev server
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("Database connection error:", err));

// Utility function to update holdings (if needed)
async function updateHoldings({ name, qty, price }) {
  const avgCost = price;
  const totalValue = qty * price;

  let holding = await HoldingsModel.findOne({ name });
  if (holding) {
    const newQty = holding.qty + qty;
    const newAvg = (holding.avg * holding.qty + avgCost * qty) / newQty;
    const newValue = newQty * price;

    holding.qty = newQty;
    holding.avg = newAvg;
    holding.value = newValue;
    await holding.save();
  } else {
    const newHolding = new HoldingsModel({
      name,
      qty,
      avg: avgCost,
      value: totalValue,
    });
    await newHolding.save();
  }
}

// Utility function to handle buy transactions (add stock to Positions and Holdings)
async function handleBuyTransaction({ name, qty, price, addTo }) {
  const totalValue = qty * price;

  // If the transaction is for adding to Positions
  if (addTo === "Positions") {
    let position = await PositionsModel.findOne({ name });

    if (position) {
      const newQty = position.qty + qty;
      const newValue = newQty * price;
      position.qty = newQty;
      position.value = newValue;
      position.price = price; // Average or specific price of the stock
      await position.save();
    } else {
      const newPosition = new PositionsModel({
        name,
        qty,
        price,
        value: totalValue,
      });
      await newPosition.save();
    }
  }

  // Now, add the stock to Holdings as well
  await updateHoldings({ name, qty, price }); // This function already does this logic

  // Save the buy order in the Orders collection
  const newOrder = new OrdersModel({
    name,
    qty,
    price,
    mode: "BUY",
    createdAt: new Date(),
  });
  await newOrder.save();
}

// Utility function to handle sell transactions (remove from Holdings or Positions)
async function handleSellTransaction({ name, qty, price, removeFrom }) {
  const Model = removeFrom === "Holdings" ? HoldingsModel : PositionsModel;
  const stock = await Model.findOne({ name });

  if (!stock || stock.qty < qty) {
    throw new Error("Insufficient quantity available.");
  }

  const newQty = stock.qty - qty;

  if (newQty > 0) {
    stock.qty = newQty;
    stock.value = newQty * stock.avg; // Update value based on new quantity
    await stock.save();
  } else {
    await Model.deleteOne({ name }); // Remove the stock if quantity becomes zero
  }

  // Save the sell transaction to the orders collection
  const newOrder = new OrdersModel({
    name,
    qty,
    price,
    mode: "SELL",
    createdAt: new Date(),
  });
  await newOrder.save();

  // If sold from Holdings, also remove from Holdings and move to Orders
  if (removeFrom === "Holdings") {
    await HoldingsModel.deleteOne({ name }); // Remove from Holdings after sell
  }
}

// Route to fetch all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).send("Error fetching holdings data.");
  }
});

// Route to fetch all positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).send("Error fetching positions data.");
  }
});

// Route to handle buy stock
app.post("/buyStock", async (req, res) => {
  const { name, qty, price, mode, addTo } = req.body;

  try {
    await handleBuyTransaction({ name, qty, price, addTo });
    const updatedHoldings = await HoldingsModel.find({}); // Fetch updated holdings
    res.status(200).json({ updatedHoldings });
  } catch (error) {
    res.status(500).send("Error processing buy stock: " + error.message);
  }
});

// Route to handle sell stock
app.post("/sellStock", async (req, res) => {
  const { name, qty, price, removeFrom } = req.body;

  try {
    await handleSellTransaction({ name, qty, price, removeFrom });
    const updatedHoldings = await HoldingsModel.find({}); // Fetch updated holdings
    res.status(200).json({ updatedHoldings, message: "Stock sold successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to fetch all orders
app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({}).sort({ createdAt: -1 }); // Fetch orders sorted by most recent
    res.json(allOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("Error fetching orders.");
  }
});

// Use authentication and product routers
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);


app.use('/api/feedback', feedbackRoutes);





// Start the server
app.listen(PORT, () => {
  console.log(`App started on http://localhost:${PORT}`);
});

mongoose.connect(uri).then(async () => {
  const test = await PositionsModel.find({});
  console.log(test); // Should return an array (empty or with documents)
});




// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require("dotenv").config();

// const HoldingsModel = require("./model/HoldingModel");
// const PositionsModel = require("./model/PositionModel");
// const OrdersModel = require("./model/OrderModel");

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect(uri)
//   .then(() => console.log("DB Connected"))
//   .catch((err) => console.error("Database connection error:", err));

// // Utility function to update holdings
// async function updateHoldings({ name, qty, price }) {
//   const avgCost = price;
//   const totalValue = qty * price;

//   let holding = await HoldingsModel.findOne({ name });
//   console.log("Found holding:", holding); // Add log for holding

//   if (holding) {
//     const newQty = holding.qty + qty;
//     const newAvg = (holding.avg * holding.qty + avgCost * qty) / newQty;
//     const newValue = newQty * price;

//     holding.qty = newQty;
//     holding.avg = newAvg;
//     holding.value = newValue;
//     await holding.save();
//     console.log("Updated holding:", holding); // Add log for updated holding
//   } else {
//     const newHolding = new HoldingsModel({
//       name,
//       qty,
//       avg: avgCost,
//       value: totalValue,
//     });
//     await newHolding.save();
//     console.log("Created new holding:", newHolding); // Add log for new holding
//   }
// }

// // Utility function to handle buy transactions
// async function handleBuyTransaction({ name, qty, price, addTo }) {
//   const totalValue = qty * price;
//   console.log("Processing buy:", { name, qty, price, addTo }); // Add log for transaction details

//   if (addTo === "Positions") {
//     let position = await PositionsModel.findOne({ name });
//     console.log("Found position:", position); // Add log for position

//     if (position) {
//       const newQty = position.qty + qty;
//       const newValue = newQty * price;
//       position.qty = newQty;
//       position.value = newValue;
//       position.price = price;
//       await position.save();
//       console.log("Updated position:", position); // Add log for updated position
//     } else {
//       const newPosition = new PositionsModel({
//         name,
//         qty,
//         price,
//         value: totalValue,
//       });
//       await newPosition.save();
//       console.log("Created new position:", newPosition); // Add log for new position
//     }
//   }

//   await updateHoldings({ name, qty, price });

//   const newOrder = new OrdersModel({
//     name,
//     qty,
//     price,
//     mode: "BUY",
//     createdAt: new Date(),
//   });
//   await newOrder.save();
//   console.log("Buy order saved:", newOrder); // Add log for buy order
// }

// // Utility function to handle sell transactions
// async function handleSellTransaction({ name, qty, price, removeFrom }) {
//   console.log("Processing sell:", { name, qty, price, removeFrom }); // Add log for transaction details

//   const Model = removeFrom === "Holdings" ? HoldingsModel : PositionsModel;
//   const stock = await Model.findOne({ name });
//   console.log("Found stock for sell:", stock); // Add log for found stock

//   if (!stock || stock.qty < qty) {
//     throw new Error("Insufficient quantity available.");
//   }

//   const newQty = stock.qty - qty;

//   if (newQty > 0) {
//     stock.qty = newQty;
//     stock.value = newQty * stock.avg;
//     await stock.save();
//     console.log("Updated stock after sell:", stock); // Add log for updated stock
//   } else {
//     await Model.deleteOne({ name });
//     console.log("Stock removed after sell:", name); // Add log for removed stock
//   }

//   const newOrder = new OrdersModel({
//     name,
//     qty,
//     price,
//     mode: "SELL",
//     createdAt: new Date(),
//   });
//   await newOrder.save();
//   console.log("Sell order saved:", newOrder); // Add log for sell order
// }

// // Route to handle buy stock
// app.post("/buyStock", async (req, res) => {
//   const { name, qty, price, mode, addTo } = req.body;
//   console.log("Request to buy stock:", req.body); // Log the request body

//   try {
//     await handleBuyTransaction({ name, qty, price, addTo });
//     const updatedHoldings = await HoldingsModel.find({});
//     console.log("Fetched updated holdings:", updatedHoldings); // Log updated holdings
//     res.status(200).json({ updatedHoldings });
//   } catch (error) {
//     console.error("Error processing buy stock:", error);
//     res.status(500).send("Error processing buy stock: " + error.message);
//   }
// });

// // Route to handle sell stock
// app.post("/sellStock", async (req, res) => {
//   const { name, qty, price, removeFrom } = req.body;
//   console.log("Request to sell stock:", req.body); // Log the request body

//   try {
//     await handleSellTransaction({ name, qty, price, removeFrom });
//     const updatedHoldings = await HoldingsModel.find({});
//     console.log("Fetched updated holdings after sell:", updatedHoldings); // Log updated holdings
//     res.status(200).json({ updatedHoldings, message: "Stock sold successfully." });
//   } catch (error) {
//     console.error("Error processing sell stock:", error);
//     res.status(400).json({ error: error.message });
//   }
// });

// // Route to fetch all holdings
// app.get("/allHoldings", async (req, res) => {
//   try {
//     const allHoldings = await HoldingsModel.find({});
//     console.log("Fetched all holdings:", allHoldings); // Log fetched holdings
//     res.json(allHoldings);
//   } catch (err) {
//     console.error("Error fetching holdings:", err);
//     res.status(500).send("Error fetching holdings data.");
//   }
// });

// // Route to fetch all positions
// app.get("/allPositions", async (req, res) => {
//   try {
//     const allPositions = await PositionsModel.find({});
//     console.log("Fetched all positions:", allPositions); // Log fetched positions
//     res.json(allPositions);
//   } catch (err) {
//     console.error("Error fetching positions:", err);
//     res.status(500).send("Error fetching positions data.");
//   }
// });


// // fetch orders

// app.get("/allOrders", async (req, res) => {
//   try {
//     const allOrders = await OrdersModel.find({}).sort({ createdAt: -1 });
//     res.json(allOrders);
//   } catch (err) {
//     console.error("Error fetching orders:", err);
//     res.status(500).send("Error fetching orders data.");
//   }
// });


// app.listen(PORT, () => {
//   console.log(`App started on http://localhost:${PORT}`);
// });