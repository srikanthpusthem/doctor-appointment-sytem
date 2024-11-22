const express = require('express');
const Appointment = require('../models/Appointment'); // Import the Appointment model
const router = express.Router();

// Create a new appointment
router.post('/', async (req, res) => {
  const { user, doctor, appointmentDate, slot } = req.body;

  try {
    const newAppointment = new Appointment({ user, doctor, appointmentDate, slot });
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment created successfully!', appointment: newAppointment });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ message: 'Error creating appointment' });
  }
});

// Fetch all appointments for a user
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    const appointments = await Appointment.find({ user: userId }).populate('doctor').populate('user');
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});

module.exports = router;
