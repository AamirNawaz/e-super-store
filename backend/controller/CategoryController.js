const { CategoryModel } = require('../models/CategoryModel');

const getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find({})
        res.json({ categories })
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await CategoryModel.findById({ _id: req.params.id });
        res.json({ category });
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const addCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        if (reqBody.name && reqBody.status) {
            const category = new CategoryModel({
                name: reqBody.name,
                status: reqBody.status
            });
            const result = await category.save();
            res.json({ result })
        } else {
            res.status(400).send('Category name and status are required field!');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCategory = async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id);
        const result = await CategoryModel.deleteOne({ _id });
        res.json({ result });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCategories,
    getCategoryById,
    addCategory,
    deleteCategory
};
