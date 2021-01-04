const mongoose = require('mongoose');
// const CategoryModel = require('../models/CategoryModel');

const productSchema = new mongoose.Schema({
    productName: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    manufacturer: String,
    details: String,
    image: String,
    price: Number,
    sale: { type: String },
    stock: {
        type: String,
        enum: ['inStock', 'outOfStock']
    },
    status: {
        type: String,
        enum: ['active', 'inActive']
    },
    size: {
        type: String,
        enum: ['small', 'large', 'Extra Large']
    },
    qty: Number,
    deliveryTime: String,
    guarantee: String,
    reviews: String

}, { timestamps: true })



const Product = mongoose.model('Product', productSchema);

module.exports.ProductModel = Product;
