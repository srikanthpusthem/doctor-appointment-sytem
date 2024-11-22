import React, { useState } from 'react';
import axios from 'axios';
import './DoctorLogin.css';

const DoctorLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear errors on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post('http://localhost:5001/api/doctors/auth/login', formData);
      alert('Doctor logged in successfully!');
      
      // Store the token in localStorage
      localStorage.setItem('doctorToken', response.data.token);

      // Redirect to doctor dashboard (adjust this route as needed)
      window.location.href = '/doctor-dashboard';
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="doctor-login">
      <h2>Doctor Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default DoctorLogin;
