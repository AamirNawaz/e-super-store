const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lname: String,
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    contactNumber: { type: Number, minlength: 5, maxlength: 15 },
    city: { type: String },
    country: { type: String },
    zipCode: { type: String },
    address: { type: String },
    userType: {
        type: String, required: true,
        enum: ['admin', 'customer', 'superAdmin'],
        default: "customer"
    },
    status: {
        type: String,
        enum: ['block', 'unblock'],
        default: 'unblock'
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: 'male'
    },
    termsAndCondition: String,
}, { timestamps: true })



const User = mongoose.model('User', userSchema);

module.exports.UserModel = User;
