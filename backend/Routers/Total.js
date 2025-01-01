const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Access the MongoDB collection directly
const collection = mongoose.connection.collection('stocks'); // Replace 'stocks' with your collection name

// API to calculate total value
router.get('/api/total-value', async (req, res) => {
  try {
    const result = await collection.aggregate([
      {
        $group: {
          _id: null,
          totalValue: { $sum: "$value" } // Summing the 'value' field
        }
      }
    ]).toArray();

    // If result is empty, set totalValue to 0
    const totalValue = result.length > 0 ? result[0].totalValue : 0;

    res.json({ totalValue }); // Send response
  } catch (error) {
    console.error("Error calculating total value:", error.message);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
