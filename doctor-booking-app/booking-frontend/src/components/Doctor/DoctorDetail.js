// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { fetchAvailableSlots, bookAppointment } from '../../services/appointmentService';
// import './DoctorDetail.css';

// const DoctorDetail = () => {
//   const location = useLocation();
//   const doctor = location.state?.doctor;

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [slots, setSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState('');
//   const [message, setMessage] = useState('');
//   const [bookingMessage, setBookingMessage] = useState('');

//   // Fetch available slots when a date is selected
//   const handleDateSelect = async (date) => {
//     setSelectedDate(date);
//     setMessage('');
//     setSlots([]);
//     setBookingMessage('');

//     try {
//       const formattedDate = date.toISOString().split('T')[0];
//       const data = await fetchAvailableSlots(doctor._id, formattedDate);
//       setSlots(data.slots || []);
//     } catch (error) {
//       console.error('Failed to fetch slots:', error.response || error.message);
//       setMessage('Failed to fetch slots. Please try again later.');
//     }
//   };

//   const handleSlotBooking = async () => {
//     if (!selectedSlot) {
//       setBookingMessage('Please select a time slot before booking.');
//       return;
//     }

//     try {
//       const userId = 'USER_ID'; // Replace with actual logged-in user ID
//       const date = selectedDate.toISOString().split('T')[0];
//       const response = await bookAppointment({
//         doctorId: doctor._id,
//         userId,
//         date,
//         slot: selectedSlot,
//       });
//       setBookingMessage(response.message || 'Appointment booked successfully!');
//     } catch (error) {
//       console.error('Error booking appointment:', error.response || error.message);
//       setBookingMessage('Failed to book the appointment. Please try again later.');
//     }
//   };

//   if (!doctor) {
//     return (
//       <div className="error-message">
//         <h2>Doctor details not found</h2>
//         <p>We couldn't find details for the selected doctor. Please try again.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="doctor-detail">
//       <h1>{doctor.name}</h1>
//       <div className="doctor-info">
//         <img src={doctor.image} alt={doctor.name} className="doctor-image" />
//         <div className="doctor-bio">
//           <h2>{doctor.specialty}</h2>
//           <p><strong>Experience:</strong> {doctor.experience || 'N/A'}</p>
//           <p><strong>Consultation Fee:</strong> ${doctor.fee || 'N/A'}</p>
//           <p><strong>Rating:</strong> {doctor.rating || 'N/A'} ⭐</p>
//           <p>{doctor.description || 'No description available.'}</p>
//         </div>
//       </div>
//       <div className="calendar-container">
//         <Calendar
//           onChange={handleDateSelect}
//           value={selectedDate}
//           minDate={new Date()}
//         />
//       </div>
//       {slots.length > 0 && (
//         <div className="slots-container">
//           <h3>Available Slots</h3>
//           <div className="slots">
//             {slots.map((slot, index) => (
//               <button
//                 key={index}
//                 className={`slot ${selectedSlot === slot.time ? 'selected' : ''}`}
//                 onClick={() => setSelectedSlot(slot.time)}
//                 disabled={slot.isBooked}
//               >
//                 {slot.time}
//               </button>
//             ))}
//           </div>
//           <button onClick={handleSlotBooking} className="confirm-booking">
//             Book Appointment
//           </button>
//         </div>
//       )}
//       {message && <p className="error-message">{message}</p>}
//       {bookingMessage && <p className="success-message">{bookingMessage}</p>}
//     </div>
//   );
// };

// export default DoctorDetail;
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DoctorDetail.css';

const DoctorDetail = () => {
  const location = useLocation();
  const doctor = location.state?.doctor;

  const [selectedDate, setSelectedDate] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [message, setMessage] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');

  // Mock response for slots
  const mockSlots = () => {
    const startHour = 8;
    const endHour = 16; // 4 PM
    const slotDuration = 30; // minutes
    const allSlots = [];

    for (let hour = startHour; hour < endHour; hour++) {
      for (let min = 0; min < 60; min += slotDuration) {
        const suffix = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12;
        const formattedMinute = min.toString().padStart(2, '0');
        allSlots.push({ time: `${formattedHour}:${formattedMinute} ${suffix}`, isBooked: false });
      }
    }
    return allSlots;
  };

  // Handle Date Selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setMessage('');
    setSlots(mockSlots());
    setBookingMessage('');
  };

  // Handle Slot Booking
  const handleSlotBooking = () => {
    if (!selectedSlot) {
      setBookingMessage('Please select a time slot before booking.');
      return;
    }

    // Mock booking confirmation
    setBookingMessage('Appointment booked successfully!');
  };

  if (!doctor) {
    return (
      <div className="error-message">
        <h2>Doctor details not found</h2>
        <p>We couldn't find details for the selected doctor. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="doctor-detail">
      <h1>{doctor.name}</h1>
      <div className="doctor-info">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className="doctor-bio">
          <h2>{doctor.specialty}</h2>
          <p><strong>Experience:</strong> {doctor.experience || 'N/A'}</p>
          <p><strong>Consultation Fee:</strong> ${doctor.fee || 'N/A'}</p>
          <p><strong>Rating:</strong> {doctor.rating || 'N/A'} ⭐</p>
          <p>{doctor.description || 'No description available.'}</p>
        </div>
      </div>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateSelect}
          value={selectedDate}
          minDate={new Date()}
        />
      </div>
      {selectedDate && slots.length === 0 && <p>No available slots for this date.</p>}
      {slots.length > 0 && (
        <div className="slots-container">
          <h3>Available Slots</h3>
          <div className="slots">
            {slots.map((slot, index) => (
              <button
                key={index}
                className={`slot ${selectedSlot === slot.time ? 'selected' : ''}`}
                onClick={() => setSelectedSlot(slot.time)}
                disabled={slot.isBooked}
              >
                {slot.time}
              </button>
            ))}
          </div>
          <button onClick={handleSlotBooking} className="confirm-booking">
            Book Appointment
          </button>
        </div>
      )}
      {message && <p className="error-message">{message}</p>}
      {bookingMessage && <p className="success-message">{bookingMessage}</p>}
    </div>
  );
};

export default DoctorDetail;
