const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const Schema = mongoose.Schema;

const Thread = new Schema({
  title: {type: String},
  text: {type: String, required: true},
  creation_date: {type: Date, default: Date.now},
  last_post: {type: Date, default: Date.now},
  password: {type: String, default: "wrathofthegods"},
  isReported: {type: Boolean, default: false},
  replies: [{
    _id: {type: Schema.Types.ObjectId, default: new ObjectId()},
    text: {type: String, required: true},
    password: {type: String, default: "wrathofthegods"},
    isReported: {type: Boolean, default: false}
  }]
});

module.exports = mongoose.model('Thread', Thread);