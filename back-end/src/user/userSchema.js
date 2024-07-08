const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    userName:String,
    phone:String,
    email:String,
    password:String,
})

module.exports=mongoose.model('user',userSchema)

