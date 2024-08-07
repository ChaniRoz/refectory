const mongoose = require('mongoose')
const EventType = require('../enum/eventType')
const EventDesign = require('../enum/eventDesign');


const eventSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    type: {
        type: String,
        enum: EventType,
        default: 'Pareve'
    },
    date: Date,
    houer: String,
    diners: Number,
    design: {
        type: String,
        enum: EventDesign,
        default: 'Black'
    },
    PaymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment',
        required: false
    }
})

module.exports = mongoose.model('event', eventSchema)
