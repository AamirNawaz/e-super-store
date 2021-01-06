
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const token = jwt.sign({
        user
    }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });

    return token;
}

module.exports = {
    generateToken
}