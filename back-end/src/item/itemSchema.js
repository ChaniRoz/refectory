const mongoose = require('mongoose');
const ItemType = require('../enum/itemType');
const EventType = require('../enum/eventType');

const itemSchema = new mongoose.Schema({
    type: {
        itemType: ItemType,
        eventType: EventType
    },
    name: String,
    price: Number,
})

module.exports = mongoose.model('item', itemSchema)

