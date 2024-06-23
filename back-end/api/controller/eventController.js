const event = require('../schema/eventSchema');
console.log("i am here xxxxxxxx");

exports.addEvent = async (req, res) => {
  const request = await event.create(req.body);
  res.json(request)
}
