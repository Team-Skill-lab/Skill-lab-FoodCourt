const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  feedback: {
    type: String
  },
  stars: {
    type: Number,
    required: true
  },
  issues: {
    type: String
  }
});

module.exports = mongoose.model('Feedback', feedbackSchema);