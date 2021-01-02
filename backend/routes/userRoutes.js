var express = require('express');
var router = express.Router();
const { getUsers, authUser, signup } = require('../controller/UserController');

router.get('/', getUsers);
router.post('/login', authUser);
router.post('/signup', signup);

module.exports = router;