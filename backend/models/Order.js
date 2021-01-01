const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    shippingAddress: String,
    contactDetails: Number,
    orderStatus: {
        type: String,
        enum: ['active', 'inActive']
    },
})



const Order = mongoose.model('Order', orderSchema);

module.exports.ProductModel = Order;
