const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  login: String,
  password: String,
});

module.exports = usersSchema;
