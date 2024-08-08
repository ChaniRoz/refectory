const itemService = require('../services/item.service');

exports.getAllItems = async (req, res) => {
  try {
    const items = await itemService.getAllItems();
    res.json(items);
  } catch (error) {
    console.error('Failed to get all items:', error);
    res.status(500).json({ message: 'Failed to get all items' });
  }
};

exports.getItemById = async (req, res) => {
  const { itemId } = req.params;

  try {
    const item = await itemService.getItemById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error('Failed to get item:', error);
    res.status(500).json({ message: 'Failed to get item' });
  }
};

exports.getItemsByTypeAndEvent = async (req, res) => {
  const { eventType, itemType } = req.params;

  try {
    const items = await itemService.getItemsByTypeAndEvent(eventType, itemType);
    res.json(items);
  } catch (error) {
    console.error('Failed to get items by type and event:', error);
    res.status(500).json({ message: 'Failed to get items by type and event' });
  }
};

exports.addItem = async (req, res) => {
  try {
    const newItem = await itemService.addItem(req.body);
    console.log("New item created:", newItem);
    res.json(newItem);
  } catch (error) {
    console.error('Failed to add item:', error);
    res.status(500).json({ message: 'Failed to add item' });
  }
};

exports.updateItem = async (req, res) => {
  const { itemId } = req.params;
  const { itemType, eventType, name, price } = req.body;

  try {
    const updatedItem = await itemService.updateItem(itemId, { itemType, eventType, name, price });
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
    await itemService.deleteItem(itemId);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Failed to delete item:', error);
    res.status(500).json({ message: 'Failed to delete item' });
  }
};