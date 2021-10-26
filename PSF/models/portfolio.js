const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  filename: String,
  title: String,
  description: String,
});

const Portfolio = mongoose.model('works', portfolioSchema);
module.exports = Portfolio;
