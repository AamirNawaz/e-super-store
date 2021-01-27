const express = require('express');
const router = express.Router();
const { protectedRoute, adminProtectedRoute } = require('../middlewares/authMiddlerware');
const { getAll, getDataById, remove, add, update, updateStatus } = require('../controller/SliderController');

router.get('/', getAll);
router.get('/:id', protectedRoute, adminProtectedRoute, getDataById);
router.post('/add', protectedRoute, adminProtectedRoute, add);
router.post('/update', protectedRoute, adminProtectedRoute, update);
router.post('/updateStatus', protectedRoute, adminProtectedRoute, updateStatus);
router.get('/delete/:id', protectedRoute, adminProtectedRoute, remove);





module.exports = router;