const koaRouter = require('koa-router')
const router = new koaRouter()
const registerApi = require('../utils/api')



router.get('/get', registerApi.get)
router.post('/register', registerApi.register)

module.exports = router;