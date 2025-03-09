const express = require('express');
const Doctor = require('../models/Doctor'); // Import the Doctor model
const router = express.Router();

// Fetch doctors with optional filtering, sorting, and pagination
router.get('/', async (req, res) => {
  try {
    const { specialty, page = 1, limit = 10, sortBy = 'rating', order = 'desc' } = req.query;

    // Build the query
    const query = specialty ? { specialty: { $regex: specialty, $options: 'i' } } : {};

    // Pagination logic
    const skip = (page - 1) * limit;

    // Sorting logic
    const sortCriteria = { [sortBy]: order === 'asc' ? 1 : -1 };

    // Fetch doctors
    const doctors = await Doctor.find(query)
      .sort(sortCriteria)
      .skip(skip)
      .limit(parseInt(limit));

    // Get the total count for pagination
    const total = await Doctor.countDocuments(query);

    res.status(200).json({
      doctors,
      total,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ message: 'Error fetching doctors' });
  }
});

// Add or update availability for a doctor
router.put('/:id/availability', async (req, res) => {
  try {
    const { id } = req.params;
    const { availability } = req.body;

    const doctor = await Doctor.findByIdAndUpdate(
      id,
      { availability },
      { new: true, runValidators: true }
    );

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({ message: 'Availability updated successfully', doctor });
  } catch (error) {
    console.error('Error updating availability:', error);
    res.status(500).json({ message: 'Error updating availability' });
  }
});

// Add a new doctor
router.post('/', async (req, res) => {
  try {
    const { name, email, password, specialty, experience, description, fee, image, rating } = req.body;

    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Doctor already exists' });
    }

    const newDoctor = new Doctor({ name, email, password, specialty, experience, description, fee, image, rating });
    await newDoctor.save();

    res.status(201).json({ message: 'Doctor added successfully', doctor: newDoctor });
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ message: 'Error adding doctor' });
  }
});

module.exports = router;
