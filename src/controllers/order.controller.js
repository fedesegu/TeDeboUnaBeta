const orderManager = require('../managers/orderManager.js');

const createOrder = async (req, res) => {
    console.log('Request body:', req.body);  // Debugging log
    const { productId, customerName } = req.body;
    console.log('Product ID:', productId);   // Debugging log
    console.log('Customer Name:', customerName);   // Debugging log
    try {
        const order = await orderManager.createOrder(productId, customerName);
        res.status(201).json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createOrder,
};
