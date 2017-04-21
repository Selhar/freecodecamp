const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project');

const Issue = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  creation: { date: Date, default: Date.now },
  author: { type: String },
  assignee: { type: String },
  open: { type: Boolean },
  status: { type: String },
  _project: { type: Schema.Types.ObjectId, ref: 'Project', required: true }
});

module.exports = mongoose.model('Issue', Issue)
  