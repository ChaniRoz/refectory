const mongoose = require('mongoose')
const orderItem = require('../orderItem/orderItemSchema')

const orderSchema = new mongoose.Schema({
    orderId: Number,
    isComplete: Boolean,
    userId: Number,
    // items :[orderItem]
})

module.exports = mongoose.model('order', orderSchema)