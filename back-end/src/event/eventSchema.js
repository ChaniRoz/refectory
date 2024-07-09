const mongoose = require('mongoose')
const EventType = require('../enum/eventType')
const EventDesign = require('../enum/eventDesign');


const eventSchema = new mongoose.Schema({
    userName: String,
    type: {
        type: String,
        enum: EventType,
        default: 'Pareve'
    },
    orderId: Number,
    date: Date,
    houer: String,
    diners: Number,
    design: {
        type: String,
        enum: EventDesign,
        default: 'Black'
    },
    PaymentId: Number
})

module.exports = mongoose.model('event', eventSchema)
