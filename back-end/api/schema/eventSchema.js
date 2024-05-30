const mongoose = require('mongoose')
const userSchema = require('./userSchema')
const orderSchema = require('./orderSchema')

const eventSchema = new mongoose.Schema({
    // userName: userSchema,
    // type: { a, b, c },//enum ,
    // orderId: orderSchema,
    // date: date,
    amount: Number
    // design: { a, b, c },
})

module.exports = mongoose.model('event', eventSchema)