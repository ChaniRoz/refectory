const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({
    userName: String,
    type: { a, b, c },//enum ,
    orderId: Number,
    date: Date,
    amount: Number,
    // design: { a, b, c },
    PaymentId:Number
})

module.exports = mongoose.model('event', eventSchema)