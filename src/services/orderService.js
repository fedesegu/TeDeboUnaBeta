const Order = require('../models/order.model.js');
const Product = require('../models/products.model.js');
const mailService = require('./mailService.js');

const createOrder = async (productId) => {
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    const newOrder = new Order({
        product: productId,
        code
    });

    const order = await newOrder.save();

    // Enviar correo electrónico
    //await mailService.sendOrderConfirmation(order);

    return order;
};

module.exports = {
    createOrder,
};
