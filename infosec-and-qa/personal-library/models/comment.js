const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Book = require('./book');

const comment = new Schema({
  title: { type: String, required: true },
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }
});

module.exports = mongoose.model('Comment', comment)
  