const item = require('../schemas/item.schema');

exports.getAllItems = async (itemData) => {
  return await item.find();
};

exports.getItemById = async (itemId) => {
  return await item.findOne({ itemId });
};

exports.getItemsByTypeAndEvent = async (eventType, itemType) => {
  return await item.find({ eventType, itemType });
};

exports.addItem = async (itemData) => {
  const existingItem = await item.findOne({ name: itemData.name });

  if (existingItem) {
    throw new Error('Item with the same name already exists');
  }

  return await item.create(itemData);
};

exports.updateItem = async (itemId, newData) => {
  return await item.findOneAndUpdate({ itemId: itemId }, newData, { new: true });
};

exports.deleteItem = async (itemId) => {
  return await item.findOneAndDelete({ _id: itemId });
};