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

        res.json({ categoriesCount, usersCount, ordersCount, productsCount })
    } catch (error) {
        res.status(404).send(error.message)
    }
}


module.exports = {
    getAllCountes
};
