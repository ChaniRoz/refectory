const mongoose = require('mongoose');
const ItemType = require('../enum/itemType');
const EventType = require('../enum/eventType');

const itemSchema = new mongoose.Schema({
    itemType: {
        type: String,
        enum: ItemType,
        default: 'Salads'
    },
    eventType: {
        type: String,
        enum: EventType,
        default: 'Pareve'
    },
    name: String,
    price: Number
})

module.exports = mongoose.model('item', itemSchema)

