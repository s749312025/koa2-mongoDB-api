const Koa = require('koa')
const path = require('path')
const app = new Koa()

const jwtKoa = require('koa-jwt')

const connect = require('./connect')

const static = require('koa-static')

const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

/* const secret = 'jwt demo'
app.use(jwtKoa({secret}).unless({
  path: [/^\/api\/login/,/^\/rep/] //数组中的路径不需要通过jwt验证
})) */

const staticPath = './view'

app.use(static(
  path.join( __dirname,  staticPath)
))

const router = require('./config/router')

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] request post is starting at port 3000')
})