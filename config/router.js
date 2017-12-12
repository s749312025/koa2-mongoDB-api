const router = require('koa-router')()

const User = require('../model/user')
const vaildatorFun = require('../validation')

router.post('/ceshi', async(ctx, next) => {
  ctx.body = ctx.request.body
  console.log("-----------body-----",ctx.request.body);
  console.log("-----------userName-----",ctx.request.body.name);
  console.log("-----------nickName-----",ctx.request.body.age);
})

const thisValidator = (type) => {
  return async (ctx, next) => {
    let infor = ctx.request.body;
    let isPass = vaildatorFun(infor, type);
    if(isPass.status == 'error') {
      ctx.body = isPass
      return
    }
    await next()
  }
}

router.post('/api/signup', thisValidator('signup'), User.signUp)
router.post('/api/login', thisValidator('login'), User.login)
router.post('/api/article/add', thisValidator('articleAdd'), User.login)

module.exports =  router;