const Appointment = require('../models/Appointment');

// Utility function to format time in 12-hour format
function formatTime(hour, minute) {
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  const formattedMinute = minute.toString().padStart(2, '0');
  return `${formattedHour}:${formattedMinute} ${suffix}`;
}

exports.getAvailableSlots = async (req, res) => {
  try {
    const { doctorId, date } = req.params;

    if (!doctorId || !date) {
      return res.status(400).json({ message: 'Doctor ID and date are required.' });
    }

    // Generate slots: 8:00 AM to 4:00 PM, 30-minute intervals
    const startHour = 8;
    const endHour = 16; // 4:00 PM
    const slotDuration = 30; // minutes
    const allSlots = [];

    for (let hour = startHour; hour < endHour; hour++) {
      for (let min = 0; min < 60; min += slotDuration) {
        allSlots.push(formatTime(hour, min));
      }
    }

    // Fetch booked appointments for the selected doctor and date
    const bookedAppointments = await Appointment.find({ doctor: doctorId, date });
    const bookedTimes = bookedAppointments.map((app) => app.startTime);

    // Mark slots as booked or available
    const responseSlots = allSlots.map((time) => ({
      time,
      isBooked: bookedTimes.includes(time),
    }));

    res.status(200).json({ slots: responseSlots });
  } catch (error) {
    console.error('Error fetching available slots:', error);
    res.status(500).json({ message: 'Failed to fetch available slots.' });
  }
};
