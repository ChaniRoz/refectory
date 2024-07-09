const mongoose = require('mongoose')
const EventType = require('../enum/eventType')

const itemSchema = new mongoose.Schema({
    itemId: Number,
    type: {
        type: String,
        enum: EventType,
        default: 'Pareve'
    },
    name: String,
    price: Number,
})

module.exports = mongoose.model('item', itemSchema)

