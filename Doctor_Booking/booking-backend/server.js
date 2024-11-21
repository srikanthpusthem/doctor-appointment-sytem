const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import Routes
const authRoutes = require('./routes/auth');
const specialtyRoutes = require('./routes/specialty');
const doctorRoutes = require('./routes/doctor');
const appointmentRoutes = require('./routes/appointment');

// Mount Routes
app.use('/api/users', authRoutes); // Auth routes (register/login)
app.use('/api/specialties', specialtyRoutes); // Specialty routes
app.use('/api/doctors', doctorRoutes); // Doctor routes
app.use('/api/appointments', appointmentRoutes); // Appointment routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
