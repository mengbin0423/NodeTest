const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        require:true
    },
    phone:{
        type:Number
    },
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    
},{collection:'test',versionKey:false})

module.exports = mongoose.model('register',registerSchema)