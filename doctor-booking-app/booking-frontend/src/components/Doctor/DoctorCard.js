import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ doctor, onClick }) => {
  return (
    <div className="doctor-card" onClick={onClick}>
      <img src={doctor.image || '/default-doctor.png'} alt={doctor.name} />
      <h2>{doctor.name}</h2>
      <p>{doctor.specialty}</p>
      <p>Experience: {doctor.experience}</p>
      <p>Rating: {doctor.rating} ⭐</p>
    </div>
  );
};

export default DoctorCard;
