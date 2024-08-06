const mongoose = require('mongoose')

const paymentSchema=new mongoose.Schema({
    paymentId:String,
    cardNum:String,
    cardDate:String,
    validity:String,
})

module.exports=mongoose.model('payment',paymentSchema)