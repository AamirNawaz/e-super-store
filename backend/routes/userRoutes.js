var express = require('express');
var router = express.Router();
const { protectedRoute } = require('../middlewares/authMiddlerware');
const { getUsers, authUser, signup, getUserProfile } = require('../controller/UserController');

router.get('/', protectedRoute, getUsers);
router.post('/login', authUser);
router.post('/signup', signup);
router.get('/profile', protectedRoute, getUserProfile);

module.exports = router;