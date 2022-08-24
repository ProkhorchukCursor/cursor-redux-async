const { Schema, model } = require("mongoose");

const newsSchema = new Schema({
 title: {
  type: String,
  default: "New news",
 },
 content: {
  type: String,
  default: "New content",
 },
 image: {
  type: String,
 },
 created: {
  type: Date,
  default: new Date(),
 },
});

const News = model("news", newsSchema);

module.exports = News;
