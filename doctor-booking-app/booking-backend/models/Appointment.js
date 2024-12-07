const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: String, required: true }, // Format: YYYY-MM-DD
  startTime: { type: String, required: true }, // Format: "08:30 AM"
});

module.exports = mongoose.model('Appointment', appointmentSchema);
