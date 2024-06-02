const mongoose = require('mongoose')

const orderItemSchema=new mongoose.Schema({
    itemId:Number,
    cnt:Number
})

module.exports=mongoose.model('orderItem',orderItemSchema)

