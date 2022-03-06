const mongoose = require("mongoose");
const Animal = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  BirthDay: {
    type: Date,
  },
  CageNum: { type: Number, required: true },
  Gender: { type: String, required: true },
  Type: { type: String, required: true },
});
module.exports = mongoose.model("animal", Animal);
