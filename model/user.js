const mongoose = require('mongoose')

const userModel = require('../schema/user')

const vaildatorFun = require('../validation')


exports.signUp = async(ctx, next) => {
  var userInfor = ctx.request.body;
  var isPass = vaildatorFun(userInfor, 'signup');
  if(isPass.status == 'error') {
    ctx.body = isPass
    return
  }
  var user = await userModel.findOne({
    username: userInfor.username
  })
  if(user) {
    ctx.body = '用户名已被注册'
  }else {
    var newUser = new userModel({
      username: userInfor.username,
      nickname: userInfor.nickname,
      password: userInfor.password,
      role: 'normal',
    })
    await newUser.save((err, docs) => {
      if(err) console.log(err);
      console.log('注册成功：' + docs);
      ctx.body = "注册成功"
    })
  }
}

exports.login = async(ctx, next) => {
  var userInfor = ctx.request.body;
  var isPass = vaildatorFun(userInfor, 'login');
  if(isPass.status == 'error') {
    ctx.body = isPass
    return
  }
  var user = await userModel.findOne({
    username: userInfor.username,
    password: userInfor.password,
  }, [
    '-_id',
    'username',
    'nickname',
    'role'
  ], function(err, docs) {
    if(err){
      ctx.body = err
    }
    ctx.body = {status:'success', data: docs}
  })
}