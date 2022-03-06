const mongoose = require("mongoose");
const Worker = new mongoose.Schema({
  FirstName: { type: String, required: true },
  Role: { type: String, required: true },
  Email: { type: String, required: true },
  PhoneNum: { type: String, required: true },
});
module.exports = mongoose.model('worker',Worker)