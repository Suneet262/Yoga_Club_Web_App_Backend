const express = require('express');
const Registration = require('../models/registration');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Registration route
router.post('/payment', async (req, res) => {
  alert("Payment Successful")
});

module.exports = router;
