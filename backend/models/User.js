const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true },
    password: { type: String, required: true },
    contactNumber: { type: Number, minlength: 15 },
    address: { type: String },
    userType: {
        type: String, required: true,
        enum: ['admin', 'customer', 'superAdmin']
    },
    status: {
        type: String,
        enum: ['blocked', 'unblock']
    },
})



const User = mongoose.model('User', userSchema);

module.exports.User = User;
