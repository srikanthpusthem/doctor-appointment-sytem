import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DoctorDetail.css';

const DoctorDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [message, setMessage] = useState('');
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Handle missing doctor data
  if (!state || !state.doctor) {
    return (
      <div className="doctor-detail">
        <h1>Error: Doctor Details Not Found</h1>
        <p>We couldn't find the details of the doctor you're looking for.</p>
        <button onClick={() => navigate(-1)} className="back-button">
          Go Back
        </button>
      </div>
    );
  }

  const doctor = state.doctor;

  // Fetch available slots
  const fetchSlots = async () => {
    setLoadingSlots(true);
    try {
      const response = await axios.get(`http://localhost:5001/api/doctors/${doctor._id}/slots`);
      setSlots(response.data.slots || []);
    } catch (error) {
      setMessage('Failed to fetch slots. Please try again later.');
    } finally {
      setLoadingSlots(false);
    }
  };

  // Handle Slot Selection
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  // Confirm Booking
  const handleBookAppointment = async () => {
    if (!selectedSlot) {
      setMessage('Please select a slot before booking.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/appointments', {
        doctorId: doctor._id,
        slot: selectedSlot,
      });
      setMessage(response.data.message || 'Appointment booked successfully!');
    } catch (error) {
      setMessage('Failed to book the appointment. Please try again later.');
    }
  };

  return (
    <div className="doctor-detail">
      <h1>{doctor.name}</h1>
      <div className="doctor-info">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className="doctor-bio">
          <h2>{doctor.specialty}</h2>
          <p>
            <strong>Experience:</strong> {doctor.experience}
          </p>
          <p>
            <strong>Consultation Fee:</strong> {doctor.fee}
          </p>
          <p>
            <strong>Rating:</strong> {doctor.rating} ⭐
          </p>
          <p>{doctor.description}</p>
        </div>
      </div>
      <div className="action-buttons">
        <button className="book-appointment" onClick={fetchSlots}>
          Book Appointment
        </button>
        <button className="contact-doctor">Contact Doctor</button>
      </div>

      {/* Available Slots Section */}
      {loadingSlots && <div className="loading">Loading available slots...</div>}
      {slots.length > 0 && (
        <div className="available-slots">
          <h3>Available Slots</h3>
          <div className="slots">
            {slots.map((slot, index) => (
              <button
                key={index}
                className={`slot ${selectedSlot === slot ? 'selected' : ''}`}
                onClick={() => handleSlotSelect(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          <button className="confirm-booking" onClick={handleBookAppointment}>
            Confirm Booking
          </button>
        </div>
      )}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default DoctorDetail;
