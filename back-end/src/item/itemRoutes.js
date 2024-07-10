const express = require("express");
const router = express.Router()

const { addItem, getAllitems, getItemById } = require('./itemController')

router.post('/', addItem);
router.get('/', getAllitems);
router.get('/:itemId', getItemById);


module.exports = router
