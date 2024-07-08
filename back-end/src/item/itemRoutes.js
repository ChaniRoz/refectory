const express = require("express");
const router = express.Router()

const {addItem}=require('./itemController')

router.post('/',addItem);


module.exports = router
