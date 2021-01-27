const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    firstName: String,
    lastName: String,
    userEmail: String,
    country: String,
    address: String,
    address2: String,
    state: String,
    countryZip: String,
    shippingAddress: String,
    useInfoForNextTime: String,
    contactDetails: Number,
    paymentMethod: String,
    paymentStatus: String,
    cardHolderName: String,
    cardNo: String,
    cardExpiry: String,
    cardCsv: String,
    orderItems: [{
        productId: { type: String, required: true },
        name: { type: String, required: true },
        sale: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
        totalAmount: { type: Number, required: true },
    }],
    totalPrice: String,
    discountPrice: String,
    orderStatus: {
        type: String,
        enum: ['pending', 'inprocess', 'delivered', 'rejected']
    },
}, { timestamps: true })



const Order = mongoose.model('Order', orderSchema);

module.exports.OrderModel = Order;
