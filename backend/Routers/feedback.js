// routes/feedback.js
const express = require('express');
const router = express.Router();
const Feedback = require('../model/Feedback');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate the request data
    if (!message) {
      return res.status(400).json({ error: 'Feedback message is required' });
    }

    // Save feedback to the database
    const feedback = new Feedback({ name, email, message });
    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

