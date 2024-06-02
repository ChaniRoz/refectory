const event = require('../schema/eventSchema');

exports.addEvent = async (req, res) => {
  const request = await event.create(req.body);
  res.json(request)
}