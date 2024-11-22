import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import './DoctorRegister.css';

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialty: null,
  });
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        console.log('Fetching specialties...');
        const response = await axios.get('http://localhost:5001/api/specialties'); // Full URL for clarity
        console.log('Fetched Specialties:', response.data);
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
  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSpecialtyChange = (selectedOption) => {
    setFormData({ ...formData, specialty: selectedOption?.value || '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form data:', formData);
      const response = await axios.post('http://localhost:5001/api/doctors/auth/register', formData);
      console.log('Response from server:', response.data);
      alert('Doctor registered successfully!');
    } catch (error) {
      console.error('Error during registration:', error.response?.data || error.message);
      alert('Registration failed.');
    }
  };
  

  return (
    <div className="doctor-register">
      <h2>Doctor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <Select
          options={specialties}
          placeholder="Select Specialty"
          onChange={handleSpecialtyChange}
          isSearchable
          filterOption={(candidate, input) =>
            candidate.label.toLowerCase().includes(input.toLowerCase())
          }
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default DoctorRegister;
