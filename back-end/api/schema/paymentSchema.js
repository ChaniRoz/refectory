const { string } = require('joi')
const mongoose = require('mongoose')

const paymentSchema=new mongoose.Schema({
    paymentId:Number,
    cardNum:Number,
    cardDate:Date,
    validity:Number,
})

module.exports=mongoose.model('payment',paymentSchema)