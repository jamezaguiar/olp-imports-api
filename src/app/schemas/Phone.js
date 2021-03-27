const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const phone = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('phone', phone);
