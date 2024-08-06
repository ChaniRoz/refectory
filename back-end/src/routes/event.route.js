const express = require("express");
const router = express.Router()

const { addEvent, deleteEvent, getAllEvents, getEventByUserId, updateEvent } = require('../controllers/event.controller')

router.get('/', getAllEvents);
router.get('/:userId', getEventByUserId);
router.post('/', addEvent);
router.put('/:eventId', updateEvent);
router.delete('/:eventId', deleteEvent);

module.exports = router