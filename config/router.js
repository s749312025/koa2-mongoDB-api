const router = require('koa-router')()

const User = require('../model/user')
const Article = require('../model/article')
const vaildatorFun = require('../validation')
const Token = require('../token/token')

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
router.post('/api/article/add', thisValidator('articleAdd'), Article.add)
router.post('/api/article/list', Article.list)
router.post('/api/article/update', thisValidator('articleUpdate'), Article.update)
router.post('/api/token/getToken',Token.getToken)
module.exports =  router;