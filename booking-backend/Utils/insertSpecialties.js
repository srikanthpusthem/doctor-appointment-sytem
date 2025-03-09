const mongoose = require('mongoose');
const Specialty = require('../models/Specialty');
require('dotenv').config(); // Load environment variables

console.log('MongoDB URI:', process.env.MONGODB_URI); // Debug log to verify URI

// List of specialties
const specialties = [
  { name: 'General Physician' },
  { name: 'Cardiologist' },
  { name: 'Dermatologist' },
  { name: 'Pediatrician' },
  { name: 'Orthopedic Surgeon' },
  { name: 'Endocrinologist' },
  { name: 'Neurologist' },
  { name: 'Gastroenterologist' },
  { name: 'Ophthalmologist' },
  { name: 'Psychiatrist' },
  { name: 'Gynecologist' },
  { name: 'Urologist' },
  { name: 'Hematologist' },
  { name: 'Oncologist' },
  { name: 'Radiologist' },
];

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Insert specialties into the database
    await Specialty.insertMany(specialties);
    console.log('Specialties added successfully');
    
    // Close the connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
