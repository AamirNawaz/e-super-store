const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/UserModel');
var bcrypt = require('bcryptjs');
const { generateToken } = require('../helper/generateToken');


const authUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (user) {
            const result = await bcrypt.compare(password, user.password);
            if (result) {
                const token = await generateToken({ id: user._id, email: user.email, name: user.name, userType: user.userType });
                res.json({ token });
            } else {
                res.status(400).send('Password did not matched');
            }
        } else {
            res.status(400).send('Email not found');
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const signup = async (req, res) => {
    const { name, email, username, password, contactNumber, address, userType, status } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const token = await generateToken({ email, username, status, name, userType });
    try {
        const user = new UserModel({
            name,
            email,
            username,
            password: hashPassword,
            contactNumber,
            address,
            userType,
            status
        });

        await user.save();
        res.json({ token });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({}).select('-password');
        res.json({ users });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUserProfile = async (req, res, next) => {
    const userInfo = await UserModel.findById({ _id: req.user.id }).select('-password');
    res.json(userInfo);
}
module.exports = {
    authUser,
    getUsers,
    signup,
    getUserProfile
}