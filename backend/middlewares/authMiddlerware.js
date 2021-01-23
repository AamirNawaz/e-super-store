const jwt = require('jsonwebtoken');

const protectedRoute = async (req, res, next) => {
    let token = null;
    try {

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            try {
                token = req.headers.authorization.split(' ')[1];
                const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
                req.user = decode.user;
                next();
            } catch (error) {
                res.status(400).send(error.message);
            }

        }
        if (!token) {
            res.status(401).send('Token not found');
        }


    } catch (error) {
        res.status(400).send(error.message);
    }
}

const adminProtectedRoute = async (req, res, next) => {
    if (req.user && req.user.userType === 'admin') {
        next();
    } else {
        res.status(401).send("Not Authorized to access admin area");
    }
}

module.exports = {
    protectedRoute,
    adminProtectedRoute
}