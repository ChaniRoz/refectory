const orderItem = require('./orderItemSchema');

exports.addOrderItem = async (req, res) => {
    const request = await orderItem.create(req.body);
    res.json(request)
}

exports.deleteOrderItem = async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const deleteOrderItem = await OrderItem.findOneAndDelete({ itemId: itemId });
        if (!deleteOrderItem) {
            return res.status(404).json({ message: 'OrderItem not found' });
        }
        res.json({ message: 'OrderItem deleted successfully' });
    } catch (error) {
        console.error('Failed to delete OrderItem:', error);
        res.status(500).json({ message: 'Failed to delete OrderItem' });
    }
};

exports.getAllOrderItems = async (req, res) => {
    try {
        const OrderItems = await OrderItem.find();
        res.json(OrderItems);
    } catch (error) {
        console.error('Failed to get all OrderItems:', error);
        res.status(500).json({ message: 'Failed to get all OrderItems' });
    }
};

exports.updateOrderItem = async (req, res) => {
    const { itemId } = req.params;
    const { amount } = req.body;
    try {
        const updatedOrderItem = await OrderItem.findOneAndUpdate(
            { itemId: itemId },
            { amount },
            { new: true }
        );
        if (!updatedOrderItem) {
            return res.status(404).json({ message: 'OrderItem not found' });
        }
        res.json(updatedOrderItem);
    } catch (error) {
        console.error('Failed to update OrderItem:', error);
        res.status(500).json({ message: 'Failed to update OrderItem' });
    }
};