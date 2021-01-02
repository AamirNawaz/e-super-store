const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        enum: ['active', 'inActive']
    },
})



const Category = mongoose.model('Category', categorySchema);

module.exports.Category = Category;
