const mongoose = require('mongoose')
const Schema = mongoose.Schema
const FOREIGN_KEY = require('./FOREIGN_KEY');

const Sample = new Schema({
  SAMPLE: { type: String, required: true },
  SAMPLE: { type: Date, default: Date.now },
  SAMPLE: { type: Date},
  SAMPLE: { type: Boolean },
  SAMPLE: { type: Schema.Types.ObjectId, ref: 'FOREIGNKEY', required: true }
});

module.exports = mongoose.model('Issue', Sample)
  