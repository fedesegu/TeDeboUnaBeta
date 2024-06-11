const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    //userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //paymentStatus: false,
    //whatsappNumber: String
    code : {
        type : String,
        unique: true,
        required: true,
        default: function() {
            return Math.floor(1000 + Math.random() * 9000).toString();
    }},
    
    purchase_datetime : {
        type : Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Order', orderSchema);