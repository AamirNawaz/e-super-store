const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, unique: true, require: true },
    status: {
        type: String,
        enum: ['active', 'inActive'],
        default: 'active'
    },
}, { timestamps: true })



const Category = mongoose.model('Category', categorySchema);

module.exports.CategoryModel = Category;
