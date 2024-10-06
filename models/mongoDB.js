const mongoose = require("mongoose");

const connect =mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("mongoDB is connected")});

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
        type:String,// password hashing is not introduced 
        required:true
    }
});

const User = mongoose.model('users',userSchema);

module.exports =User;