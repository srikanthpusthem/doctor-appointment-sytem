const mongoose = require('mongoose');

const specialtySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Specialty', specialtySchema);
