const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username : {type:String},
  password : {type:String},
  nickname: {type:String},
  role: {type:String}
})

module.exports = mongoose.model('user', UserSchema, 'user')