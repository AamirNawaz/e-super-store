var express = require('express');
var router = express.Router();
const { protectedRoute, adminProtectedRoute } = require('../middlewares/authMiddlerware');
const { getUsers, authUser, signup, getUserProfile, deleteUser, updateUserStatus } = require('../controller/UserController');

router.get('/', protectedRoute, adminProtectedRoute, getUsers);
router.post('/login', authUser);
router.post('/signup', signup);
router.get('/profile', protectedRoute, getUserProfile);
router.get('/delete/:id', protectedRoute, adminProtectedRoute, deleteUser);
router.post('/updateStatus', protectedRoute, adminProtectedRoute, updateUserStatus);

module.exports = router;