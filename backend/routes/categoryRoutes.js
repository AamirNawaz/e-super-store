const express = require('express');
const router = express.Router();
const { protectedRoute, adminProtectedRoute } = require('../middlewares/authMiddlerware');
const { getCategories, getCategoryById, addCategory, deleteCategory,updateCategory } = require('../controller/CategoryController');

router.get('/', protectedRoute, adminProtectedRoute, getCategories);
router.get('/getAll', getCategories);

router.get('/:id', protectedRoute, adminProtectedRoute, getCategoryById);
router.post('/add', protectedRoute,adminProtectedRoute,addCategory);
router.post('/update', protectedRoute, adminProtectedRoute, updateCategory);
router.get('/delete/:id', protectedRoute, adminProtectedRoute, deleteCategory);




module.exports = router;