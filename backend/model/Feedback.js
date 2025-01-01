// models/Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Optional if you want the user's name
  email: { type: String, required: true }, // Optional if email collection is needed
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const FeedbackModel = mongoose.model("Feedback", feedbackSchema)



module.exports = FeedbackModel;