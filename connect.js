var mongoose = require("mongoose");

var dburl = "mongodb://shengchao:s88557339@ds113795.mlab.com:13795/sc_mongo";
var db = mongoose.connect(dburl)

db.connection.on("error", function (error) {  
  console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {  
  console.log("数据库连接成功"); 
})

db.connection.on('disconnected', function () {    
  console.log('数据库连接断开');  
})
