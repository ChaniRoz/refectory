const eventService = require('../services/event.sevice');
const sendEmailToManager = require('../email/sendEmail');



exports.getEventByUserId = async (req, res) => {
  const { id } = req.params.userId;

  try {
    const Event = await eventService.getEventById({ id });
    if (!Event) {
      return res.status(404).json({ message: 'event not found' });
    }
    res.json(Event);
  } catch (error) {
    console.error('Failed to get event:', error);
    res.status(500).json({ message: 'Failed to get event' });
  }
};


exports.addEvent = async (req, res) => {
  try {
    const { userName, date, diners, PaymentId, type, design, houer } = req.body;
    const createdEvent = await eventService.createEvent(req.body); // assuming createEvent is a function in your event.service.js
    sendEmailToManager(userName, date, diners, type, design);
    res.json(createdEvent);
  } catch (error) {
    console.error('Failed to add event:', error);
    res.status(500).json({ message: 'Failed to add event' });
  }
};
exports.updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const { userId, type, date, houer, diners, design, PaymentId } = req.body;
  try {
    const updatedEvent = await eventService.updateEventById(eventId, req.body);
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    console.error('Failed to update event:', error);
    res.status(500).json({ message: 'Failed to update event' });
  }
};

exports.deleteEvent = async (req, res) => {
  const { eventId } = req.params;
  
  try {
    const deletedEvent = await eventService.deleteEventById({ _id: eventId });
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Failed to delete event:', error);
    res.status(500).json({ message: 'Failed to delete event' });
  }
};