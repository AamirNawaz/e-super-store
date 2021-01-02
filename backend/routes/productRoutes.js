var express = require('express');
var router = express.Router();

const { addProduct, getProducts, getProductById, deleteProduct } = require('../controller/ProductController');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/add', addProduct);
router.delete('/delete/:id', deleteProduct);


module.exports = router;