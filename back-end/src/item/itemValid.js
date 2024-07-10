const Joi = require('joi');
const ItemType = require('../enum/itemType');
const EventType = require('../enum/eventType');

let itemSchema = Joi.object({
    type: Joi.object({
        itemType: Joi.string().valid(...Object.values(ItemType)),
        eventType: Joi.string().valid(...Object.values(EventType))
    }),
    name: Joi.string().min(2).max(15),
    price: Joi.number().min(1)
})

exports.validate = (itemData) => {
    return itemSchema.validate(itemData);
}