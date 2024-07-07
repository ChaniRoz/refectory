const mongoose = require('mongoose')
const { EventType } = require('../enum/eventType')
const { EventDesign } = require('../enum/eventDesign')


const eventSchema = new mongoose.Schema({
    userName: String,
    type: EventType,
    orderId: Number,
    date: Date,
    amount: Number,
    design: EventDesign,
    PaymentId:Number
})

module.exports = mongoose.model('event', eventSchema)