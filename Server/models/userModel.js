const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    is_verified:{
        type:Number,
        default:0
    },
    token:{
        type:String,
        default:''
    },
    meetings:[]
})

const User = mongoose.model("User",userSchema);

module.exports = User;