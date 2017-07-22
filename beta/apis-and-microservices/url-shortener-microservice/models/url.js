const mongoose = require('mongoose');
const schema = mongoose.Schema;

const url_schema = new schema ({
  original_url: {type: String, required: true, unique: true},
  short_url: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('UrlSchema', url_schema);