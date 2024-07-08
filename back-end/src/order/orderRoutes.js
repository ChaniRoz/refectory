const express = require("express");

const router = express.Router()

const {deleteOrder,addOrder,getAllOrders,updateOrder,getOldOrders,getPresentOrders} = require("./orderController");

router.post('/',addOrder);
router.delete('/:orderId', deleteOrder);
router.put('/:orderId', updateOrder);
router.get('/', getAllOrders);
router.get('/old', getOldOrders);
router.get('/present', getPresentOrders);



module.exports = router


