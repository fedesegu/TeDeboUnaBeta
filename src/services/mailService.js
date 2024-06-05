const nodemailer = require('nodemailer');
const config = require('../config.js');

const sendOrderConfirmation = async (order) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.emailUser,
            pass: config.emailPass,
        },
    });

    const mailOptions = {
        from: config.emailUser,
        to: 'recipient@example.com', // Reemplaza con el email del usuario
        subject: 'Order Confirmation',
        text: `Thank you for your order! Your order number is ${order.orderNumber}.`,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = {
    sendOrderConfirmation,
};
