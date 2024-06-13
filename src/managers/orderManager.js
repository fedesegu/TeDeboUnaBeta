const orderService = require('../services/orderService.js');

const createOrder = async (productId, customerName) => {
    return await orderService.createOrder(productId, customerName);
};

module.exports = {
    createOrder,
};
