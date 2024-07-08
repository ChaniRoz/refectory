const event = require('./eventSchema');

exports.addEvent = async (req, res) => {
  const request = await event.create(req.body);
  res.json(request)
}

exports.deleteEvent = async (req, res) => {
  const eventId = req.params.eventId;
  try {
    const deleteEvent = await event.findOneAndDelete({ eventId: eventId });
    if (!deleteEvent) {
      return res.status(404).json({ message: 'event not found' });
    }
    res.json({ message: 'event deleted successfully' });
  } catch (error) {
    console.error('Failed to delete event:', error);
    res.status(500).json({ message: 'Failed to delete event' });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await event.find();
    res.json(events);
  } catch (error) {
    console.error('Failed to get all events:', error);
    res.status(500).json({ message: 'Failed to get all events' });
  }
};

exports.updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const { userName, date, amount, PaymentId, type, design } = req.body;
  try {
    const updatedEvent = await event.findOneAndUpdate(
      { eventId: eventId },
      { userName, date, amount, PaymentId, type, design },
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    console.error('Failed to update event:', error);
    res.status(500).json({ message: 'Failed to update event' });
  }
};


exports.getEventByName = async (req, res) => {
  const { name } = req.params.userName;

  try {
    const Event = await event.findOne({ name });
    if (!Event) {
      return res.status(404).json({ message: 'event not found' });
    }
    res.json(Event);
  } catch (error) {
    console.error('Failed to get event:', error);
    res.status(500).json({ message: 'Failed to get event' });
  }
};