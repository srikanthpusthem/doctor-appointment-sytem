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

// Debugging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import Routes
const authRoutes = require('./routes/auth');
const specialtyRoutes = require('./routes/specialty');
const doctorRoutes = require('./routes/doctor');
const appointmentRoutes = require('./routes/appointment');
const doctorAuthRoutes = require('./routes/doctorAuth'); // Adjust path

// Mount Routes
app.use('/api/users', authRoutes); // Auth routes (register/login)
app.use('/api/specialties', specialtyRoutes); // Specialty routes
app.use('/api/doctors', doctorRoutes); // Doctor routes
app.use('/api/appointments', appointmentRoutes); // Appointment routes
app.use('/api/doctors/auth', doctorAuthRoutes); // Doctor authentication routes

// Root Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
