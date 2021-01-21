const { OrderModel } = require('../models/OrderModel');

const getOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find({})
        res.json({ orders })
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getOrdersById = async (req, res) => {
    try {
        const order = await OrderModel.findById({ _id: req.params.id });
        res.json({ order });
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const orderCheckout = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        return false;


        if (reqBody.name && reqBody.status) {
            const order = new OrderModel({
                name: reqBody.name,
                status: reqBody.status
            });
            const result = await order.save();
            res.json({ status: 200, result })
        } else {
            res.json({ status: 400, message: 'Category name and status are required field!' });
        }
    } catch (error) {
        res.json({ status: 400, message: 'Order Checkout Failed!' });
    }
}

const deleteOrder = async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id);
        const result = await OrderModel.deleteOne({ _id });
        res.json({ result });
    } catch (error) {
        console.log(error);
    }
}

const updateOrderStatus = async (req, res) => {
    try {
        const { id, name, status } = req.body;
        const result = await OrderModel.updateOne(
            { _id: id },
            [{ $set: { name, status } }]
        );
        res.json({ result });
    } catch (error) {
        // res.json({status:400,message:error.data})
        console.log('error');
    }
}



module.exports = {
    orderCheckout,
    getOrders,
    getOrdersById,
    deleteOrder,
    updateOrderStatus
};
