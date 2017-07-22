const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Users = new Schema({
  username: {
    type: String, 
    required: true,
    unique: true,
    maxlength: [50, 'Username exceeds maximum length.']
  }
})

module.exports = mongoose.model('User', Users)