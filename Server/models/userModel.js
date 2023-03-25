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
<<<<<<< HEAD
    }
=======
    },
    meetings:[]
>>>>>>> 6a7eb66a7d91842f10c46e0e87c2e3d6cad983c9
})

const User = mongoose.model("User",userSchema);

module.exports = User;