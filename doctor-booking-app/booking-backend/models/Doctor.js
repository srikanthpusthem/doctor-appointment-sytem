const mongoose = require('mongoose');

// Define Doctor Schema
const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true }, // For login
  password: { type: String}, // For login
  specialty: { type: String, required: true },
  experience: { type: String, default: '' }, // Example: "5 Years"
  description: { type: String, default: '' }, // Short bio or description
  fee: { type: String, default: '' }, // Example: "$50"
  image: { type: String, default: 'https://via.placeholder.com/150' }, // Profile picture URL
  rating: { type: Number, default: 0 }, // Example: 4.5
  availability: [
    {
      date: { type: Date, required: true }, // Available date
      slots: [
        {
          startTime: { type: String, required: true }, // Example: "10:00 AM"
          endTime: { type: String, required: true }, // Example: "10:30 AM"
        },
      ],
    },
  ],
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Create Doctor model
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
