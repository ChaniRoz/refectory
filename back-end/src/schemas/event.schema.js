const mongoose = require('mongoose')
const EventType = require('../enum/eventType.enum')
const EventDesign = require('../enum/eventDesign.enum');


const eventSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isComplete: Boolean,
    type: {
        type: String,
        enum: EventType,
        default: 'Pareve'
    },
    date: Date,
    hour: String,
    diners: Number,
    design: {
        type: String,
        enum: EventDesign,
        default: 'Black'
    },
    Items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item'
    }],
    PaymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment',
        // required: true
    }
})

module.exports = mongoose.model('event', eventSchema)
