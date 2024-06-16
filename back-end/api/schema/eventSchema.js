const mongoose = require('mongoose')
const { EventType } = require('../enum/eventType.enum')
const { EventDesign } = require('../enum/eventDesign.enum')


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