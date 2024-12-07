const Appointment = require('../models/appointmentModel');

exports.createAppointment = async (req, res) => {
  try {
    const { doctorId, userId, date, slot } = req.body;

    if (!doctorId || !userId || !date || !slot) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    // Parse slot - assuming 30-minute increments
    const slotParts = slot.split(' '); // ["09:00", "AM"]
    // Convert "09:00 AM" to startTime and endTime if needed
    // If you just store slot as startTime, that's also fine.
    const startTime = slot; 
    // For a 30-minute increment
    const endTime = calculateEndTime(slot);

    // Check if slot is already booked
    const existingAppointment = await Appointment.findOne({ doctor: doctorId, date, startTime });
    if (existingAppointment) {
      return res.status(400).json({ message: 'Slot already booked.' });
    }

    const newAppointment = new Appointment({
      doctor: doctorId,
      user: userId,
      date,
      startTime,
      endTime
    });

    await newAppointment.save();

    res.json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ message: 'Failed to book appointment.' });
  }
};

function calculateEndTime(startSlot) {
  // Example: "09:00 AM" -> "09:30 AM"
  const [time, meridiem] = startSlot.split(' ');
  let [hour, minute] = time.split(':').map(Number);

  minute += 30;
  if (minute >= 60) {
    hour += 1;
    minute -= 60;
  }

  // Handle AM/PM changes
  if (hour === 12 && meridiem === 'AM') {
    // 12:00 AM is midnight, careful with logic if needed
  }
  if (hour > 12) {
    hour -= 12;
    // Switch AM/PM if going past noon
    // For simplicity, assume working hours won't cross from AM to PM unexpectedly.
    // Otherwise, you need logic to handle this.
  }
  router.get('/doctors/:doctorId/availability/:date', (req, res) => {
    console.log('Route hit with:', req.params);
    res.status(200).json({ message: 'Test route working!' });
  });
  
  const formattedHour = hour.toString().padStart(2, '0');
  const formattedMin = minute.toString().padStart(2, '0');
  return `${formattedHour}:${formattedMin} ${meridiem}`;
}
