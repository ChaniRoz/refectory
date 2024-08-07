const event = require('../schemas/event.schema');

exports.createEvent = async (eventData) => {
    const events = await event.create(eventData);
    return events;
};

exports.getEventById = async (id) => {
    const events= await event.findOne({ id });
    return events;
};

exports.updateEventById = async (eventId, eventData) => {
    try {
      const updatedEvent = await event.findOneAndUpdate(
        { eventId: eventId },
        { userId: eventData.userId, type: eventData.type, date: eventData.date, houer: eventData.houer, diners: eventData.diners, design: eventData.design, PaymentId: eventData.PaymentId },
        { new: true }
      );
      return updatedEvent;
    } catch (error) {
      console.error('Failed to update event:', error);
      throw new Error('Failed to update event');
    }
  };

exports.deleteEventById = async (eventId) => {
    const events= event.findOneAndDelete({ _id: eventId });
    return events;
};