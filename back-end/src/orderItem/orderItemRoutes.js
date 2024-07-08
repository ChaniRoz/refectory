const express = require("express");
const router = express.Router()

const { addOrderItem, deleteOrderItem, getAllOrderItems, updateOrderItem } = require('./orderItemController')

router.post('/', addOrderItem);
router.delete('/:itemId', deleteOrderItem);
router.get('/', getAllOrderItems);
router.put('/:itemId', updateOrderItem);


module.exports = router