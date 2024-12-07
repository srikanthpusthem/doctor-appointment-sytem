
const express = require('express');
const router = express.Router();

const { getAvailableSlots } = require('../Controllers/appointmentController');

// Route to fetch available slots
router.get('/doctors/:doctorId/availability/:date', getAvailableSlots);

module.exports = router;
