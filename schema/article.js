const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {type:String},
  created: {type:String},
  username : {type:String},
  password : {type:String},
  nickname: {type:String},
  role: {type:String}
})

module.exports = mongoose.model('article', ArticleSchema, 'article')