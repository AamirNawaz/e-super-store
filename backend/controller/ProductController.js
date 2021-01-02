var { ProductModel } = require('../models/ProductModel');


const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.json({ products });
    } catch (error) {
        throw new Error('products not found');
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById({ _id: req.params.id });
        res.json({ product });
    } catch (error) {
        throw new Error('Single Product not found', error);
    }
}


const addProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        const products = new ProductModel({
            name: reqBody.name,
            manufacturer: reqBody.manufacturer,
            category: reqBody.category,
            image: reqBody.image,
            price: reqBody.price,
            sale: reqBody.sale,
            inStock: reqBody.inStock,
            status: reqBody.status,
            size: reqBody.size
        });
        const result = await products.save();
        res.json({ result })
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await ProductModel.deleteOne({ _id });
        res.json({ result });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    deleteProduct
};
