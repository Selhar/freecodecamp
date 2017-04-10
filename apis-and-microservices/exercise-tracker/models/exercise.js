const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Exercises = new Schema({
  description: { type: String, required: true },
  duration: { type: Number, required: true},
  date: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Exercises', Exercises)