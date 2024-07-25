const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedBack'); // Adjust the path if needed

// POST feedback
router.post('/', async (req, res) => {
  try {
    const { email, feedback, stars, issues } = req.body;

    const newFeedback = new Feedback({
      email,
      feedback,
      stars,
      issues
    });

    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ error: 'Failed to submit feedback. Please try again later.' });
  }
});

module.exports = router;