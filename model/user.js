const mongoose = require('mongoose')

const userModel = require('../schema/user')

exports.signUp = async(ctx, next) => {
  var userInfor = ctx.request.body;
  try {
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
        if(err){
          ctx.body = {status: 'error', data: '注册失败'}
          return
        }
        console.log('注册成功：' + docs);
        ctx.body = {status: 'success', data: '注册成功'}
      })
    }
  } catch (error) {
    ctx.body = {status: 'error', data: '数据库错误'}
  }
  
}

exports.login = async(ctx, next) => {
  var userInfor = ctx.request.body;
  try {
    var user = await userModel.findOne({
      username: userInfor.username,
      password: userInfor.password,
    }, [
      '-_id',
      'username',
      'nickname',
      'role'
    ])
    if(user == null) {
      ctx.body = {status: 'error', data: '用户名或密码错误'}
      return;
    }
    ctx.body = {status:'success', data: user}
  } catch (error) {
    ctx.body = {status:'error', data: '数据库查询错误'}
  }
}