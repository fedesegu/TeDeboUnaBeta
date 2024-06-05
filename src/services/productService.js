const Product = require('../models/products.model.js');

const getProduct = async () => {
    return await Product.findOne();
};

module.exports = {
    getProduct,
};
