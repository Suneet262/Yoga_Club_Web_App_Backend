const express = require('express');
const Registration = require('../models/registration');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { name, email, age, gender, batchTime } = req.body;

    const newRegistration = new Registration({
      name,
      email,
      age,
      gender,
      batchTime,
      userId: req.userId, 
    });

    await newRegistration.save();

    res.status(201).json({ message: 'Registration successful and the payment fees for this month is 500/- INR' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
