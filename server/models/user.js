const { Schema, model } = require("mongoose");

const userSchema = new Schema({
 name: {
  type: String,
  default: "New User",
 },
 username: {
  type: String,
  default: "New Login",
 },
 avatar: {
  type: String,
 },
});

const User = model("user", userSchema);

module.exports = User;
