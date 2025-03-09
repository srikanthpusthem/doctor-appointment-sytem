const mongoose = require('mongoose');
const Doctor = require('../models/Doctor'); // Adjust the path based on your project structure
require('dotenv').config();

console.log('MongoDB URI:', process.env.MONGODB_URI);
const doctors = [
  {
    name: 'Dr. Richard James',
    specialty: 'General Physician',
    experience: '4 Years',
    description: 'Dr. Richard has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fee: '$50',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 4.5,
    email: 'richard.james@example.com',
    password: 'dummyPassword123'
  },
  {
    name: 'Dr. Sarah Connor',
    specialty: 'Cardiologist',
    experience: '6 Years',
    description: 'Dr. Sarah specializes in diagnosing and treating heart conditions.',
    fee: '$70',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 4.8,
    email: 'sarah.connor@example.com',
    password: 'dummyPassword123'
  },
  {
    name: 'Dr. Emily Johnson',
    specialty: 'Dermatologist',
    experience: '5 Years',
    description: 'Dr. Emily is skilled in treating skin conditions and offering skincare advice.',
    fee: '$60',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 4.7,
    email: 'emily.johnson@example.com',
    password: 'dummyPassword123'
  },
  {
    name: 'Dr. Mark Smith',
    specialty: 'Pediatrician',
    experience: '10 Years',
    description: 'Dr. Mark specializes in the health of children, from infancy through adolescence.',
    fee: '$55',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 4.6,
    email: 'mark.smith@example.com',
    password: 'dummyPassword123'
  },
  {
    name: 'Dr. Angela Lee',
    specialty: 'Orthopedic Surgeon',
    experience: '8 Years',
    description: 'Dr. Angela focuses on conditions involving the musculoskeletal system.',
    fee: '$75',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    rating: 4.9,
    email: 'angela.lee@example.com',
    password: 'dummyPassword123'
  },
  {
    name: 'Dr. James Brown',
    specialty: 'Endocrinologist',
    experience: '7 Years',
    description: 'Dr. James specializes in hormonal disorders and metabolic issues.',
    fee: '$65',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    rating: 4.4,
    email: 'james.brown@example.com',
    password: 'dummyPassword123'
  }
  // Add unique emails for all other doctors similarly
];


mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    
    await Doctor.insertMany(doctors);
    console.log('Doctors added successfully');
    
    // Close the connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });