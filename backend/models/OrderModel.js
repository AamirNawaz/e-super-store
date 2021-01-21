const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    firstName: String,
    lastName: String,
    userEmail: String,
    country: String,
    state: String,
    countryZip: String,
    shippingAddress: String,
    contactDetails: Number,
    paymentMethod: String,
    paymentStatus: String,
    cardHolderName: String,
    cardNo: String,
    cardExpiry: String,
    cardCsv: String,
    orderItems: {
        id: String,
        name: String,
        qty: String,
        actualPrice: String,
    },
    totalPrice: String,
    discountPrice: String,
    orderStatus: {
        type: String,
        enum: ['active', 'inActive']
    },
}, { timestamps: true })



const Order = mongoose.model('Order', orderSchema);

module.exports.OrderModel = Order;
