const item = require('./itemSchema');
const { validate } = require('./itemValid');

exports.addItem = async (req, res) => {
  let validateItem = validate(req.body);
  console.log(validateItem, "validateItem");

  if (validateItem.error) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  try {
    const existingItem = await item.findOne({ name: req.body.name });

    if (existingItem) {
      return res.status(400).json({ message: 'Item with the same name already exists' });
    }

    const newItem = await item.create(req.body);
    console.log("New item created:", newItem);
    res.json(newItem);
  } catch (error) {
    console.error('Failed to add item:', error);
    return res.status(500).json({ message: 'Failed to add item' });
  }
}

exports.getAllitems = async (req, res) => {
  try {
    const items = await item.find();
    res.json(items);
  } catch (error) {
    console.error('Failed to get all items:', error);
    res.status(500).json({ message: 'Failed to get all items' });
  }
};

exports.getItemById = async (req, res) => {
  const { itemId } = req.params.itemId;

  try {
    const item = await item.findOne({ itemId });
    if (!item) {
      return res.status(404).json({ message: 'item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error('Failed to get item:', error);
    res.status(500).json({ message: 'Failed to get item' });
  }
};