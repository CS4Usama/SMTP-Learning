const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    orderID: String,
    createdAt: {
        type: String,
        required: true,
    },
    date: {
        type: String
    }
});

const ordersModel = mongoose.model('orders', orderSchema);
module.exports = ordersModel;