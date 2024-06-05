const productService = require('../services/productService.js');

const getProduct = async () => {
    return await productService.getProduct();
};

module.exports = {
    getProduct,
};
