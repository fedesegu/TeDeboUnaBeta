const Order = require('../models/order.model.js');
const Product = require('../models/products.model.js');

const createOrder = async (productId, customerName) => {
    console.log('Product ID:', productId);
    console.log('Customer Name:', customerName);
    if (!customerName) {
        throw new Error('Customer Name is undefined');
    }
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    const newOrder = new Order({
        product: productId,
        productName: product.name,
        productPrice: product.price,
        customerName: customerName,
    });

    const order = await newOrder.save();
    return order;
};

module.exports = {
    createOrder,
};






// const Order = require('../models/order.model.js');
// const Product = require('../models/products.model.js');
// const mailService = require('./mailService.js');

// const createOrder = async (req, res) => {
//     try {
//         const { productId, nombre } = req.body;
//         const product = await Product.findById(productId);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         const newOrder = new Order({
//             product: productId,
//             productName: product.name,
//             productPrice: product.price,
//             nombre
//         });

//         const order = await newOrder.save();

//         // Enviar correo electrónico (opcional)
//         // await mailService.sendOrderConfirmation(order);

//         return res.status(201).json(order);
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// };

// module.exports = {
//     createOrder,
// };







// const Order = require('../models/order.model.js');
// const Product = require('../models/products.model.js');
// const mailService = require('./mailService.js');

// const createOrder = async (productId) => {
//     const product = await Product.findById(productId);
//     if (!product) {
//         throw new Error('Product not found');
//     }

//     const newOrder = new Order({
//         product: productId,
//         productName: product.name,
//         productPrice:product.price,
//     });

//     const order = await newOrder.save();

//     // Enviar correo electrónico
//     //await mailService.sendOrderConfirmation(order);

//     return order;
// };

// module.exports = {
//     createOrder,
// };
