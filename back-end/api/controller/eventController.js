const event = require('../schema/eventSchema');

exports.addEvent = async (req, res) => {
  //validation
  const request = await event.create(req.body);
  res.json(request)
}