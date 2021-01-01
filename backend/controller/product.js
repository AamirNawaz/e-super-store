var express = require('express');
var router = express.Router();
var { Product } = require('../models/Product');


router.get('/', function (req, res, next) {
    res.render('index', { title: 'products' });
});

router.post('/add', async (req, res, next) => {
    try {
        const reqBody = req.body;
        const products = new Product({
            name: reqBody.name,
        });
        await products.save();
    } catch (e) {
        console.log(e);
    }


});

module.exports = router;
