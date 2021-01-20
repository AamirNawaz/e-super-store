var express = require('express');
var router = express.Router();

const { addProduct, addProductUrl, getProducts, getProductById, deleteProduct } = require('../controller/ProductController');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/add', addProduct);
router.get('/delete/:id', deleteProduct);
router.post('/addUrl', addProductUrl);



module.exports = router;