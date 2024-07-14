const mongoose = require('mongoose')

const orderItemSchema=new mongoose.Schema({
    itemId:Number,
    amount:Number
})

module.exports=mongoose.model('orderItem',orderItemSchema)

