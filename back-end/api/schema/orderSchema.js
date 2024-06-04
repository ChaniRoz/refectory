const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderId: Number,
    isComplete: Boolean,
    email: String,
    arr :[]
})

module.exports = mongoose.model('order', orderSchema)