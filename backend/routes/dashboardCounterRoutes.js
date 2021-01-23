var express = require('express');
var router = express.Router();
const { protectedRoute, adminProtectedRoute } = require('../middlewares/authMiddlerware');
const { getAllCountes } = require('../controller/DashboardCountersController');

router.get('/', protectedRoute, adminProtectedRoute, getAllCountes);


module.exports = router;