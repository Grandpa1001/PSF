const mongoose = require('mongoose');
const pagesSchema = new mongoose.Schema({
  url: String,
  title: String,
  description: String,
  published: Boolean,
});




exports.module = pagesSchema;
