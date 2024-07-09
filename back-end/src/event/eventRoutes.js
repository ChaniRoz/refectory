const express = require("express");
const router = express.Router()

const { addEvent, deleteEvent, getAllEvents, getEventByName, updateEvent } = require('./eventController')

router.post('/', addEvent);
router.delete('/:eventId', deleteEvent);
router.get('/', getAllEvents);
router.get('/:name', getEventByName);
router.put('/:eventId', updateEvent);


module.exports = router
