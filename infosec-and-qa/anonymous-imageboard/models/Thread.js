const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const Schema = mongoose.Schema;

//Saved will be _id, text, created_on(date&time), bumped_on(date&time, starts same as created_on), reported(boolean), delete_password, & replies(array).
const Thread = new Schema({
  title: {type: String, required: true, unique: true},
  creation_date: {type: Date, default: Date.now},
  last_post: {type: Date, default: Date.now},
  password: {type: String},
  isReported: {type: Boolean},

  replies: [{
    _id: {type: Schema.Types.ObjectId, default: new ObjectId()},
    text: {type: String, required: true},
    password: {type: String},
    reported: {type: Boolean}
  }],
  //commentCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Thread', Thread);