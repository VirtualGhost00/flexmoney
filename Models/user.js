const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  gender: String,
  batch: String,
});

module.exports = mongoose.model("user", userSchema);
