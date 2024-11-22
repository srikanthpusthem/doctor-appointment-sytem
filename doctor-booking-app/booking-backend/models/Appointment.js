const mongoose = require('mongoose');

// Define Appointment Schema
const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  appointmentDate: { type: String, required: true },
  slot: {
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  }
});

// Create Appointment model
const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
