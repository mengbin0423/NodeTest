const mongoose = require('mongoose');

const registerScheam = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        require:true
    },
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    
},{collection:'test',versionKey:false})

module.exports = mongoose.model('register',registerScheam)