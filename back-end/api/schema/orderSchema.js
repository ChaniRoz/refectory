const mongoose = require('mongoose')

const orderSchema=new mongoose.Schema({
    orderId:Number,
    isComplete:Boolean,
    email:String
})

module.exports=mongoose.model('order',orderSchema)