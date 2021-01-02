const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        enum: ['active', 'inActive'],
        default: 'active'
    },
}, { timestamps: true })



const Category = mongoose.model('Category', categorySchema);

module.exports.CategoryModel = Category;
