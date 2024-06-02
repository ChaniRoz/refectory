const express = require("express");
const router = express.Router()
const {addPayment,getPaymentById}=require('../controller/payController')

router.post('/',addPayment);
router.get('/:paymentId',getPaymentById);

module.exports = router
