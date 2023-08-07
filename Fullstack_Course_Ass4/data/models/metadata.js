
const mongoose = require('mongoose');

const metadata = new mongoose.Schema({
  user: String,
  date: String,
  postId: String,
  link: String,
})

module.exports = mongoose.models.Metadata || mongoose.model("Metadata", metadata);