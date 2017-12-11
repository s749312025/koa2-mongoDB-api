var mongoose = require("mongoose");

var db = mongoose.connect("mongodb://shengchao:s88557339@ds113795.mlab.com:13795/sc_mongo")

db.connection.on("error", function (error) {  
  console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {  
  console.log("数据库连接成功"); 
})

db.connection.on('disconnected', function () {    
  console.log('数据库连接断开');  
})

var TestSchema = new mongoose.Schema({
  name : {type:String},
  age : {type:Number,default:0},
  work : {type:String}
});

var blogSchema = new mongoose.Schema({
  title:  String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
      votes: Number,
      favs:  Number
  }
})

var TestModel = db.model('test1',TestSchema)

var TestEntity = new TestModel({
  name: 'wangqianqian',
  age: 25,
  work: 'yunyin'
})

//删除
//Model.remove(conditions, [callback])
//Model.findOneAndRemove(conditions, [options], [callback])
/* conditions：查询条件；update：需要修改的数据；options控制选项；callback回调函数。
options有以下选项：
　　sort： 如果有多个查询条件，按顺序进行查询更新。
　　maxTimeMS： 查询用时上限。
　　select： 设置数据的返回。 */

/* TestModel.update(
  {name: 'shengchao'},   //查询的条件
  {work: 'quanzhan'},             //需要修改的数据
  {multi: true},         // 是否更新多个查询记录

  function(err, docs) {
    if(err) console.log(err);
    console.log('更改成功：' + docs);
  }
) */

  //updateMany 一次更新多条
  //updateOne 一次更新一条
  //findByIdAndUpdate   findOneAndUpdate

  //这里的multi可以是下面这些参数
  /* safe (boolean)： 默认为true。安全模式。
　upsert (boolean)： 默认为false。如果不存在则创建新记录。
　multi (boolean)： 默认为false。是否更新多个查询记录。
　runValidators： 如果值为true，执行Validation验证。
　setDefaultsOnInsert： 如果upsert选项为true，在新建时插入文档定义的默认值。
　strict (boolean)： 以strict模式进行更新。
　overwrite (boolean)： 默认为false。禁用update-only模式，允许覆盖记录 */

//多条查询  只返回第一个查询记录findOne
/* TestModel.find({name: 'she1'}, {name: 1, work:1}, function(err, docs) {
  if(err) console.log(err);
  console.log('查询结果' + docs);
}) */

//多条保存
/* TestModel.insertMany(
  [{name: 'she1', age: 2,task:"ywai", work:'wuye'},
  {name: 'he1', age: 3, work: "ceshi"}], function(err, docs) {
  if(err) console.log(err);
  console.log('保存成功：' + docs);
}) */

//单条保存
/* TestEntity.save(function(err,doc){
  if(err){
      console.log("error :" + err);
  } else {
      console.log(doc);
  }
}); */