const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    isComplete: Boolean,
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
      },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item'
    }]
})

module.exports = mongoose.model('order', orderSchema)