const express = require('express');
const router = express.Router();
const { getCategories, getCategoryById, addCategory, deleteCategory } = require('../controller/CategoryController');

router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.post('/add', addCategory);
router.delete('/delete/:id', deleteCategory);

module.exports = router;