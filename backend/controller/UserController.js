const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/UserModel');
var bcrypt = require('bcryptjs');


const authUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (user) {
            const result = await bcrypt.compare(password, user.password);
            if (result) {

                const token = jwt.sign({
                    email: user.email,
                    name: user.name,
                    userType: user.userType,

                }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

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

    const token = jwt.sign({
        email,
        username,
        status,
        name,
        userType,
    }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

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
        const users = UserModel.find({});
        res.json({ users });
    } catch (error) {
        throw new Error('User controller error');
    }
}

module.exports = {
    authUser,
    getUsers,
    signup
}