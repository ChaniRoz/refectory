const express = require("express");
const router = express.Router()

const { addItem, getAllitems, getItemById, getItemsByTypeAndEvent } = require('./itemController')

router.post('/', addItem);
router.get('/', getAllitems);
router.get('/:itemId', getItemById);
router.get('/:eventType/:itemType', getItemsByTypeAndEvent);


module.exports = router
