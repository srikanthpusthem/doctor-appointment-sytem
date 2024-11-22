const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const router = express.Router();
require('dotenv').config();

// Doctor Registration


router.post('/register', async (req, res) => {
  const { name, email, password, specialty } = req.body;
  try {
    console.log('Incoming request:', req.body);

    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      console.log('Doctor already exists:', email);
      return res.status(400).json({ message: 'Doctor already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newDoctor = new Doctor({ name, email, password: hashedPassword, specialty });
    await newDoctor.save();

    console.log('Doctor registered successfully:', newDoctor);
    res.status(201).json({ message: 'Doctor registered successfully!' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log('Incoming Login Request:', req.body); // Log incoming request

    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      console.log('Doctor not found:', email); // Log missing doctor
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, doctor.password);
    if (!isPasswordValid) {
      console.log('Invalid password for:', email); // Log invalid password
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ doctorId: doctor._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Login Successful for:', email); // Log successful login
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Server error during login:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;
