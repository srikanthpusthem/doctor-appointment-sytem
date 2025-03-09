import React, { useState } from 'react';
import './UserLogin.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
//import ph from "../assets/images/11222.jpg";

const UserLogin = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      try {
        const response = await axios.post('http://localhost:5001/api/users/login', formData);
        console.log('Login successful:', response.data);
        localStorage.setItem('token', response.data.token);
        navigate('/userdashboard'); // Navigate to the dashboard after login
      } catch (error) {
        console.error('Error logging in:', error);
        setError('Invalid email or password.');
      }
    } else {
      setError('Please enter both email and password.');
    }
  };

  return (
    <div className="user-login-container">
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

      {/* Right Section with Login Form */}
      <div className="right-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Patient Login</h2>
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
              <input type="checkbox" /> Remember my password
            </label>
            <Link to="/forgotpassword" className="forgot-password">
              Forgot password?
            </Link>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="register-link">
            Don't have an account? <Link to="/userregister">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
