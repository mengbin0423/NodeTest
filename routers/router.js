const koaRouter = require('koa-router')
const router = new koaRouter()
const registerApi = require('../utils/api')



router.get('/get', registerApi.get)
router.post('/post', registerApi.post)
router.post('/register', registerApi.register)
router.post('/loginIn', registerApi.loginIn)


module.exports = router;