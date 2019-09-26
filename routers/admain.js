const koaRouter = require('koa-router')
const router = new koaRouter()

router.get('/admain/user',function(req,res,next){
    res.send('管理员')
})

module.exports = router;