const { string } = require('joi')
const mongoose = require('mongoose')

const paySchema=new mongoose.Schema({
    paymentId:String,
    numCard:String,
    dateCard:String,
    cvc:String,
})

module.exports=mongoose.model('pay',paySchema)

