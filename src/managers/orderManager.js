const orderService = require('../services/orderService.js');

const createOrder = async (productId) => {
    return await orderService.createOrder(productId);
};

module.exports = {
    createOrder,
};
