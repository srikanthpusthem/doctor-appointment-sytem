const express = require('express');
const Specialty = require('../models/Specialty'); // Import the Specialty model
const router = express.Router();

// Fetch all specialties
router.get('/', async (req, res) => {
  try {
    const specialties = await Specialty.find();
    res.status(200).json(specialties);
  } catch (error) {
    console.error('Error fetching specialties:', error);
    res.status(500).json({ message: 'Error fetching specialties' });
  }
});

module.exports = router;
