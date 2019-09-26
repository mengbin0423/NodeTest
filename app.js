const koa = require('koa')
const app = new koa();
const fs = require('fs')
const cors = require('koa2-cors');




app.use(cors());
const registerRouter = require('./routers/router')

app.use(registerRouter.routes()).use(registerRouter.allowedMethods())


app.listen(8080)