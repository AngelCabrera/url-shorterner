const mongoose = require('mongoose');
const { Schema } = mongoose;

const UrlSchema = Schema({
  url: {type: String, required: true, unique: true},
  shortlink: {type: Number, required: true, unique: true}
});

module.exports = mongoose.model('Url', UrlSchema);