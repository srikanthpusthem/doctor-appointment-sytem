import React from 'react';
import { useLocation } from 'react-router-dom';
import './Doctordetail.css';

const DoctorDetail = () => {
  const { state } = useLocation();
  const doctor = state.doctor;

  return (
    <div className="doctor-detail">
      <h1>{doctor.name}</h1>
      <div className="doctor-info">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className="doctor-bio">
          <h2>{doctor.specialty}</h2>
          <p><strong>Experience:</strong> {doctor.experience}</p>
          <p><strong>Consultation Fee:</strong> {doctor.fee}</p>
          <p><strong>Rating:</strong> {doctor.rating} ⭐</p>
          <p>{doctor.description}</p>
        </div>
      </div>
      <div className="action-buttons">
        <button className="book-appointment">Book Appointment</button>
        <button className="contact-doctor">Contact Doctor</button>
      </div>
    </div>
  );
};

export default DoctorDetail;
