const event = require('../schemas/event.schema');
const sendEmailToManager = require('../email/sendEmail');





exports.addEvent = async (req, res) => {
  try {
    const { userName, date, diners, PaymentId, type, design, houer } = req.body;
    const request = await event.create(req.body);
    sendEmailToManager(userName, date, diners, type, design);
    res.json(request)
  } catch (error) {
    console.error('Failed to add event:', error);
    res.status(500).json({ message: 'Failed to add event' });
  }

}