const mongoose = require('mongoose');

const pagesSchema = new mongoose.Schema({
  url: String,
  title: String,
  description: String,
  published: Boolean,
});

module.exports = mongoose.model('pages', pagesSchema);
