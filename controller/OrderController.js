const { OrderModel } = require('../models/OrderModel');

const getOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find({}).populate('userId').exec();
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
        if (reqBody.userId && reqBody.orderItems && reqBody.orderItems.length > 0) {
            const order = new OrderModel({
                userId: reqBody.userId,
                firstName: reqBody.firstName,
                lastName: reqBody.lastName,
                userEmail: reqBody.userEmail,
                address: reqBody.address,
                address2: reqBody.address2,
                country: reqBody.country,
                state: reqBody.state,
                countryZip: reqBody.countryZip,
                shippingAddress: reqBody.shippingAddress,
                useInfoForNextTime: reqBody.useInfoForNextTime,
                contactDetails: reqBody.contactDetails,
                paymentMethod: reqBody.paymentMethod,
                paymentStatus: 'paid',
                cardHolderName: reqBody.cardHolderName,
                cardNo: reqBody.cardNumber,
                cardExpiry: reqBody.expiryDate,
                cardCsv: reqBody.cvvNumber,

                orderItems: reqBody.orderItems,

                totalPrice: '',
                discountPrice: '',
                orderStatus: 'pending',

            });

            const result = await order.save();
            res.json({ status: 200, result })
        } else {
            res.json({ status: 400, message: 'Order placing failed!' });
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
