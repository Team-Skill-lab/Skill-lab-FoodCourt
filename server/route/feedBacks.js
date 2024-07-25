const express = require('express');
const router = express.Router();
const FeedBack = require('../models/feedBack');
router.get('/', async (req, res) => {
    try {
        const Feedback = await FeedBack.find();
        res.json(Feedback);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;