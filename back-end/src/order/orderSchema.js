const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    isComplete: Boolean,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
   items: [{
        type: Map,
        of: mongoose.Schema.Types.ObjectId
    }],
})



module.exports = mongoose.model('order', orderSchema)