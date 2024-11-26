import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DoctorCard from 'components/Doctor/DoctorCard.js';
import './UserDashboard.css';

const UserDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch doctors on component mount
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5001/api/doctors', {
          params: { specialty, search: searchTerm },
        });
        setDoctors(response.data.doctors);
        setLoading(false);
      } catch (err) {
        setError('Failed to load doctors. Please try again later.');
        setLoading(false);
      }
    };
    fetchDoctors();
  }, [searchTerm, specialty]);

  const handleDoctorClick = (doctor) => {
    navigate(`/doctor/${doctor._id}`, {state:{doctor}});
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
  };

  if (loading) return <div className="loading-spinner"></div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="user-dashboard">
      <header className="header">
        <h1>Find Your Specialist</h1>
        <p>Search and book appointments with the best doctors near you.</p>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for doctors..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={specialty} onChange={handleSpecialtyChange}>
          <option value="">All Specialties</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="General Physician">General Physician</option>
          {/* Add more dynamically fetched specialties if needed */}
        </select>
      </div>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor._id}
            doctor={doctor}
            onClick={() => handleDoctorClick(doctor)}
          />
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
