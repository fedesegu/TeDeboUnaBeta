const express = require('express');
const orderController = require('../controllers/order.controller.js');

const router = express.Router();

router.post('/newOrder', orderController.createOrder);

module.exports = router;