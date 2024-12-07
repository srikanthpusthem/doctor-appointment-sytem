import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import './DoctorRegister.css';

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialty: null,
  });
  const [specialties, setSpecialties] = useState([]);

  // Fetch specialties for the dropdown
  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/specialties');
        setSpecialties(
          response.data.map((specialty) => ({
            value: specialty.name,
            label: specialty.name,
          }))
        );
      } catch (error) {
        console.error('Error fetching specialties:', error.message);
      }
    };
    fetchSpecialties();
  }, []);

  // Handle form field changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle specialty selection
  const handleSpecialtyChange = (selectedOption) => {
    setFormData({ ...formData, specialty: selectedOption?.value || '' });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/doctors/auth/register', formData);
      alert('Doctor registered successfully!');
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      alert('Registration failed.');
    }
  };

  return (
    <div className="doctor-register-container">
      {/* Left Section with Doctor Image */}
      <div className="left-section">
        <div className="doctor-image-container">
          <img
            src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
            alt="Doctor Cartoon"
            className="doctor-image"
          />
        </div>
      </div>

      {/* Right Section with Registration Form */}
      <div className="right-section">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Doctor Registration</h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <Select
            options={specialties}
            placeholder="Select Specialty"
            onChange={handleSpecialtyChange}
            isSearchable
          />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <div className="login-option">
          <p>
            Already have an account?{' '}
            <Link to="/doctorlogin" className="login-link">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;
