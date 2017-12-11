const router = require('koa-router')()

const User = require('../model/user')

router.post('/ceshi', async(ctx, next) => {
  ctx.body = ctx.request.body
  console.log("-----------body-----",ctx.request.body);
  console.log("-----------userName-----",ctx.request.body.name);
  console.log("-----------nickName-----",ctx.request.body.age);
})

router.post('/api/signup',User.signUp)
router.post('/api/login',User.login)

module.exports =  router;