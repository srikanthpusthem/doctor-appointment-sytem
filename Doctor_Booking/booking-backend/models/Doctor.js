const mongoose = require('mongoose');

// Define Doctor Schema
const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  availability: [{
    date: { type: String, required: true },
    slots: [{
      startTime: { type: String, required: true },
      endTime: { type: String, required: true },
    }]
  }],
});

// Create Doctor model
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
