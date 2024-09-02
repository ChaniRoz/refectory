const item = require('../schemas/item.schema');
const { validate } = require('../validation/item.valid');

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
    const Item = await item.findOne({ itemId });
    if (!Item) {
      return res.status(404).json({ message: 'item not found' });
    }
    res.json(Item);
  } catch (error) {
    console.error('Failed to get item:', error);
    res.status(500).json({ message: 'Failed to get item' });
  }
};

exports.getItemsByTypeAndEvent = async (req, res) => {
  const { eventType,itemType } = req.params;  

  try {
    const items = await item.find({ eventType: eventType, itemType: itemType });
    res.json(items);
  } 
  catch (error) {
    console.error('Failed to get items by type and event:', error);
    res.status(500).json({ message: 'Failed to get items by type and event' });
  }
};

exports.addItem = async (req, res) => {
  // let validateItem = validate(req.body);
  // console.log(validateItem, "validateItem");

  // if (validateItem.error) {
  //   return res.status(400).json({ message: 'Invalid data' });
  // }

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
    // return res.status(500).json({ message: 'Failed to add item' });
  }
}


exports.updateItem = async (req, res) => {
  const { itemId } = req.params;
  const {itemType ,eventType,name,price } = req.body;
  try {
    const updatedItem = await event.findOneAndUpdate(
      { itemId: itemId },
      {itemType ,eventType,name,price},
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    console.error('Failed to update item:', error);
    res.status(500).json({ message: 'Failed to update item' });
  }
};

exports.deleteItem = async (req, res) => {
  const { itemId } = req.params;
  try {
    const deletedItem = await event.findOneAndDelete({ _id: itemId });
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Failed to delete item:', error);
    res.status(500).json({ message: 'Failed to delete item' });
  }
};