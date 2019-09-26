//接口
const userRegist = require('../models/register');

const get = async (ctx,next) => {
    ctx.status = 200;
    ctx.body = {
        msg: 'get request!!',
        data: {
            data: ctx.request.query
        }
    }
}

const register = async (ctx,next) => {
    ctx.status = 200;
    ctx.body = {
        msg: 'success！！！',
        data: {
            data: ctx.request.query
        }
    }
}
module.exports = {get,register}