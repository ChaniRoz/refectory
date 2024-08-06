const express = require("express");
const router = express.Router()

const { addItem, getAllitems, getItemById, getItemsByTypeAndEvent, deleteItem, updateItem } = require('../controllers/item.controller')

router.get('/', getAllitems);
router.get('/:itemId', getItemById);
router.get('/:eventType/:itemType', getItemsByTypeAndEvent);
router.post('/', addItem);
router.put('/:itemId', updateItem);
router.delete('/:itemId', deleteItem);

module.exports = router
