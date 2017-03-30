const mongoose = require('mongoose');
const schema = mongoose.Schema;

const url_schema = new schema ({
  url : {type: String, required: true},
  index : {type: Number, required: true}
});

module.exports = mongoose.model('UrlSchema', url_schema);