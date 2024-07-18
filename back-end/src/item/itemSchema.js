const mongoose = require('mongoose');
const ItemType = require('../enum/itemType');
const EventType = require('../enum/eventType');

const itemSchema = new mongoose.Schema({
    itemType: {
        type: String,
        enum: EventType,
        default: 'Pareve'
    },
    eventType: {
        type: String,
        enum: ItemType,
        default: 'Salads'
    },
    name: String,
    price: Number
})

module.exports = mongoose.model('item', itemSchema)

