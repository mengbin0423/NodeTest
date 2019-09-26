const mongoose = require('mongoose');

const registerScheam = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:Number,
        require:true
    },
    confirmPassword:{
        type:Number,
        require:true
    }
},{collection:'register',versionKey:false})

module.exports = mongoose.model('register',registerScheam)