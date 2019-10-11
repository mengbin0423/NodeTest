//接口
const userRegist = require('../models/register');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test');
const User = require('../models/register')
//得到数据库连接句柄
var db = mongoose.connection;
//通过数据库连接句柄，监听mongoose数据库成功的事件
db.on('open',function(err){
	if(err){
		console.log('数据库连接失败');
		throw err;
	}
	console.log('数据库连接成功')
})

const get = async (ctx,next) => {
    ctx.status = 200;
    
    ctx.body = {
        msg: 'get request!!',
        data: {
            data: ctx.request.query
        }
    }
}

const post = async(ctx, next) =>{
    ctx.status = 200
    ctx.body = {
        msg: 'post request!!',
        data: {
            data: ctx.request.body
        }
    }
}

const register = async (ctx,next) => {
    
    const req = await User.findOne({ email: ctx.request.body.email })   //model中的find()方法
    const res = ctx.request.body
    if(req){
        ctx.body ={
            msg:'success!',
            data:{
                data:'已注册！'
            }
        }
    }else{
        const newUser = await User.create({
            email:res.email,
            username:res.username,
            password:res.password
          });
        if(newUser){
            ctx.body ={
                msg:'success!',
                data:{
                    data:'注册成功！'
                }
            } 
        }else{
            ctx.body ={
                msg:'success!',
                data:{
                    data:'注册失败！'
                }
            } 
        }
        
    }

    next()
}

const loginIn = async (ctx,next) =>{
    const req = ctx.request.query;
    const res = await User.findOne({username:req.username,password:req.password})
    const pas = await User.findOne({})
    if(res){
        ctx.body = {
            msg:'登录成功！',
            code:0,
        }
    }
}
module.exports = {get,post,register,loginIn}