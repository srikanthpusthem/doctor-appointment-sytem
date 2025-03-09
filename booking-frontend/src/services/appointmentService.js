import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const fetchAvailableSlots = async (doctorId, date) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/doctors/${doctorId}/availability/${date}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching slots:', error.response || error.message);
    throw error;
  }
};

export const bookAppointment = async ({ doctorId, userId, date, slot }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/doctors/${doctorId}/book`, {
      userId,
      date,
      slot,
    });
    return response.data;
  } catch (error) {
    console.error('Error booking appointment:', error.response || error.message);
    throw error;
  }
};
