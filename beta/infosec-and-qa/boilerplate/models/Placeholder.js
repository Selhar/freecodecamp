const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeholder = new Schema({
  //title: { type: String, required: true, unique: true },
  //comment: { type: Array },
  //commentCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('placeholder', placeholder);