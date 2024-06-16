const mongoose = require('mongoose')
const { EventType } = require('../enum/eventType.enum')

const itemSchema=new mongoose.Schema({
    itemId:Number,
    type:EventType,
    name:String,
    price:Number,
})

module.exports=mongoose.model('item',itemSchema)

