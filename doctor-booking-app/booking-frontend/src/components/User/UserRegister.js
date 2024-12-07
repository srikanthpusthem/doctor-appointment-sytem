import React, { useState } from 'react';
import './UserRegister.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      try {
        const response = await axios.post('http://localhost:5001/api/users/register', formData);
        console.log('Registration successful:', response.data);
        navigate('/userlogin'); // Navigate to the login page after registration
      } catch (error) {
        console.error('Error registering:', error);
        setError('Registration failed. Please try again.');
      }
    } else {
      setError('Please fill out all fields.');
    }
  };

  return (
    <div className="user-register-container">
      {/* Left Section with Patient Image */}
      <div className="left-section">
        <div className="patient-image-container">
          <img
            src="https://as1.ftcdn.net/v2/jpg/07/47/50/00/1000_F_747500071_6ulaWCKSJJg6cLoty6BFofWtx4R9V175.jpg"
            alt="Patient"
            className="patient-image"
          />
        </div>
      </div>

      {/* Right Section with Registration Form */}
      <div className="right-section">
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Patient Registration</h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="register-button">
            Register
          </button>
          <p className="login-link">
            Already have an account? <Link to="/userlogin">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
