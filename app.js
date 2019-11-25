const koa = require('koa')
const app = new koa();
const fs = require('fs')
const cors = require('koa2-cors');
const config = require('./config/config')
const bodyParser = require('koa-bodyparser');
const registerRouter = require('./routers/router')

app.use(cors());
app.use(bodyParser());
app.use(registerRouter.routes()).use(registerRouter.allowedMethods())
app.listen(config.port)