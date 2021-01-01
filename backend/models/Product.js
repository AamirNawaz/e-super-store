const mongoose = require('mongoose');
// const CategoryModel = require('../models/CategoryModel');

const productSchema = new mongoose.Schema({
    name: String,
    // category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    // manufacturer: String,
    // image: String,
    // price: Number,
    // sale: { type: String },
    // stock: {
    //     type: String,
    //     enum: ['inStock', 'outOfStock']
    // },
    // status: {
    //     type: String,
    //     enum: ['active', 'inActive']
    // },
})



const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;
