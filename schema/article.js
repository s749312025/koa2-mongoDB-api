const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {type:String},
  created: {type:Date},
  content : {type:String},
  last_mod_time : {type:Date},
  role: {type:String}
})

module.exports = mongoose.model('article', ArticleSchema, 'article')