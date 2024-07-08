const item = require('./itemSchema');

exports.addItem = async (req, res) => {
    const request = await item.create(req.body);
    res.json(request)
}