const express = require("express");
const router = express.Router()
const {addPayment,getPaymentById}=require('../controllers/payment.controller')

router.post('/',addPayment);
router.get('/:paymentId',getPaymentById);

module.exports = router
