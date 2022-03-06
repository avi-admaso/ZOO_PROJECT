const mongoose = require("mongoose");
const User = new mongoose.Schema({
  UserName:{
    type: String,
    required:true
  },
  Email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}
,{timestamps:true});
module.exports = mongoose.model('user',User)