import React, { useState } from 'react';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  // Mock appointments
  const mockAppointments = [
    { date: '2024-12-07', time: '08:00 AM', patient: 'John Doe', status: 'Confirmed' },
    { date: '2024-12-07', time: '08:30 AM', patient: 'Jane Smith', status: 'Confirmed' },
    { date: '2024-12-07', time: '09:00 AM', patient: 'Alice Brown', status: 'Confirmed' },
    { date: '2024-12-08', time: '10:00 AM', patient: 'Bob White', status: 'Confirmed' },
    { date: '2024-12-08', time: '11:00 AM', patient: 'Valeti', status: 'Confirmed' },
  ];

  const handleDateChange = (date) => {
    const filteredAppointments = mockAppointments.filter(
      (appointment) => appointment.date === date
    );
    setAppointments(filteredAppointments);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Doctor Dashboard</h1>
      <h2 className="doctor-name">Dr. Likhitha</h2>
      <p className="dashboard-subtitle">Manage your appointments efficiently</p>

      {/* Date Selection */}
      <div className="date-selection">
        <label htmlFor="date-select" className="date-label">
          Select Date:
        </label>
        <select id="date-select" onChange={(e) => handleDateChange(e.target.value)}>
          <option value="">--Select a Date--</option>
          <option value="2024-12-07">2024-12-07</option>
          <option value="2024-12-08">2024-12-08</option>
        </select>
      </div>

      {/* Appointments */}
      {appointments.length > 0 ? (
        <div className="appointments-container">
          <h2 className="appointments-title">Appointments for Selected Date</h2>
          <ul className="appointments-list">
            {appointments.map((appointment, index) => (
              <li key={index} className="appointment-card">
                <div>
                  <strong>Time:</strong> {appointment.time}
                </div>
                <div>
                  <strong>Patient:</strong> {appointment.patient}
                </div>
                <div className={`status ${appointment.status.toLowerCase()}`}>
                  {appointment.status}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="no-appointments">No appointments for the selected date.</p>
      )}
    </div>
  );
};

export default DoctorDashboard;
