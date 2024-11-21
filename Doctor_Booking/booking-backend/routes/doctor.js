const express = require('express');
const Doctor = require('../models/Doctor'); // Import the Doctor model
const router = express.Router();

// Fetch doctors by specialty
router.get('/', async (req, res) => {
  try {
    const { specialty } = req.query; // Accept specialty as a query parameter
    const doctors = await Doctor.find({ specialty });
    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ message: 'Error fetching doctors' });
  }
});

module.exports = router;
