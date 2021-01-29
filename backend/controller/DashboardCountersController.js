const { CategoryModel } = require('../models/CategoryModel');
const { OrderModel } = require('../models/OrderModel');
const { ProductModel } = require('../models/ProductModel');
const { UserModel } = require('../models/UserModel');

const getAllCountes = async (req, res) => {
    try {
        const categoriesCount = await CategoryModel.countDocuments({})
        const usersCount = await UserModel.countDocuments({})
        const ordersCount = await OrderModel.countDocuments({})
        const productsCount = await ProductModel.countDocuments({})

        const orders = await OrderModel.find({});
        const categories = await CategoryModel.find({});
        const products = await ProductModel.find({});

        res.json({ categoriesCount, usersCount, ordersCount, productsCount, orders, categories, products })
    } catch (error) {
        res.status(404).send(error.message)
    }
}


module.exports = {
    getAllCountes
};
