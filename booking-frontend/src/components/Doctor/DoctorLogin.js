import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorLogin.css';

const DoctorLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      // Simulate successful login and redirect to dashboard
      navigate('/doctordashboard');
    } else {
      setError('Please enter both email and password.');
    }
  };

  return (
    <div className="doctor-login-container">
      {/* Left Section with Doctor Image */}
      <div className="left-section">
        <div className="doctor-image-container">
          <img
            src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
            alt="Doctor"
            className="doctor-image"
          />
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="right-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome, Doctor!</h2>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;
