const mongoose = require('mongoose')

const itemSchema=new mongoose.Schema({
    itemId:Number,
    type:[a,b,c],
    name:String,
    price:Number,
})

module.exports=mongoose.model('item',itemSchema)

