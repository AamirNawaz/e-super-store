const mongoose = require('mongoose');
// const CategoryModel = require('../models/CategoryModel');

const productSchema = new mongoose.Schema({
    name: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    manufacturer: String,
    image: String,
    price: Number,
    sale: {
        type: String,
        default: 0
    },
    inStock: {
        type: String,
        default: true
    },
    status: {
        type: String,
        enum: ['active', 'inActive']
    },
    size: {
        type: String,
        enum: ['small', 'large', 'extraLarge', 'medium']
    }
}, { timestamps: true })



const Product = mongoose.model('Product', productSchema);

module.exports.ProductModel = Product;
