const Product = require('../models/products.model.js');

const getProduct = async () => {
    return await Product.find();
};

module.exports = {
    getProduct,
};
