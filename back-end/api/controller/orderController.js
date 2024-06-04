const order = require('../schema/orderSchema');

exports.addOrder = async (req, res) => {
  const request = await order.create(req.body);
  res.json(request)
}

exports.deleteOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const deleteOrder = await order.findOneAndDelete({ orderId: orderId });
    if (!deleteOrder) {
      return res.status(404).json({ message: 'order not found' });
    }
    res.json({ message: 'order deleted successfully' });
  } catch (error) {
    console.error('Failed to delete order:', error);
    res.status(500).json({ message: 'Failed to delete order' });
  }
};

exports.getOldOrders = async (req, res) => {
  const email = req.params.email;
  try {
    const orders = await order.find({ email: email, isComplete: true })
    res.json(orders);
  } catch (error) {
    console.error('Failed to get old orders:', error);
    res.status(500).json({ message: 'Failed to get old orders' });
  }
};

exports.getPresentOrders = async (req, res) => {
  const email = req.params.email;
  try {
    const orders = await order.find({ email: email , isComplete:false})
    if(!orders){
      console.error("not found present order!");
    }
    res.json(orders);
  } catch (error) {
    console.error('Failed to get present orders:', error);
    res.status(500).json({ message: 'Failed to get present orders' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await order.find();
    res.json(orders);
  } catch (error) {
    console.error('Failed to get all orders:', error);
    res.status(500).json({ message: 'Failed to get all orders' });
  }
};


exports.updateOrder = async (req, res) => {
  const { orderId } = req.params;
  const { isChange, email } = req.body;
  try {
    const updatedUser = await order.findOneAndUpdate(
      { orderId: orderId }, 
      { isChange, email },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Failed to update user:', error);
    res.status(500).json({ message: 'Failed to update user' });
  }
};
