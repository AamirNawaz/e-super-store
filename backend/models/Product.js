const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    manufacturer: String,
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
})



const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;
