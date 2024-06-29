const express = require('express');
const router = express.Router();
const { createEntities } = require('../controller/DetailsController');

router.post('/createEntities', createEntities);

module.exports = router;
