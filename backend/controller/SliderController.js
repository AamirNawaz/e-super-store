const { SliderModel } = require('../models/SliderModel');

const getAll = async (req, res) => {
    try {
        const sliders = await SliderModel.find({})
        res.json({ sliders })
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getDataById = async (req, res) => {
    try {
        const slider = await SliderModel.findById({ _id: req.params.id });
        res.json({ slider });
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const add = async (req, res) => {
    try {
        const reqBody = req.body;
        // console.log(reqBody);
        if (reqBody.name && reqBody.status && reqBody.image) {
            const category = new SliderModel({
                name: reqBody.name,
                image: reqBody.image,
                status: reqBody.status
            });
            const result = await category.save();
            res.json({ status: 200, result })
        } else {
            res.json({ status: 400, message: 'slider name and status are required field!' });
        }
    } catch (error) {
        res.json({ status: 400, message: 'slider already exist!' });
    }
}

const remove = async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await SliderModel.deleteOne({ _id });
        res.json({ result });
    } catch (error) {
        console.log(error);
    }
}

const update = async (req, res) => {
    try {
        const { id, name, image, status } = req.body;
        const result = await SliderModel.updateOne(
            { _id: id },
            [{ $set: { name, status, image } }]
        );
        res.json({ result });
    } catch (error) {
        // res.json({status:400,message:error.data})
        console.log('error');
    }
}



const updateStatus = async (req, res) => {
    try {
        const { sliderId, status } = req.body;
        const result = await SliderModel.updateOne(
            { _id: sliderId },
            [{ $set: { status: status } }]
        );
        res.json({ result });
    } catch (error) {
        res.json({ status: 400, message: error.data })
        console.log('error');
    }
}

module.exports = {
    getAll,
    getDataById,
    remove,
    update,
    updateStatus,
    add
};
