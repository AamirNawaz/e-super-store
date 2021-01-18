const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
    image: String,
    status: {
        type: String,
        enum: ['active', 'inActive']
    },
}, { timestamps: true })



const Slider = mongoose.model('Slider', sliderSchema);

module.exports.Slider = Slider;
