const sendEmailToManager = require('../email/sendEmail');
const event = require('../schemas/event.schema');

exports.getAllEvents = async (req, res) => {
  try {
    const events = await event.find();
    res.json(events);
  } catch (error) {
    console.error('Failed to get all events:', error);
    res.status(500).json({ message: 'Failed to get all events' });
  }
};

exports.getEventByUserId = async (req, res) => {
  const { id } = req.params.userId;

  try {
    const Event = await event.findOne({ id });
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
  const { userName, date, diners, PaymentId, type, design ,houer} = req.body;
  console.log({ userName, date, diners, PaymentId, type, design ,houer});
  console.log(req.body);
  const request = await event.create(req.body);
  sendEmailToManager(userName, date, diners, type, design )
  res.json(request)
}

exports.updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const { userId, type, date, houer, diners, design, PaymentId } = req.body;
  try {
    const updatedEvent = await event.findOneAndUpdate(
      { eventId: eventId },
      { userId, type, date, houer, diners, design, PaymentId },
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

exports.deleteEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const deletedEvent = await event.findOneAndDelete({ _id: eventId });
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Failed to delete event:', error);
    res.status(500).json({ message: 'Failed to delete event' });
  }
};