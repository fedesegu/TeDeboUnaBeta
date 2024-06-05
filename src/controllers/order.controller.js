const orderManager = require('../managers/orderManager.js');

const createOrder = async (req, res) => {
    const { productId } = req.body;
    try {
        const order = await orderManager.createOrder(productId);
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createOrder,
};
