const express = require('express');
const router = express.Router();
const { protectedRoute, adminProtectedRoute } = require('../middlewares/authMiddlerware');
const { orderCheckout, getOrders, getOrdersById, deleteOrder, updateOrderStatus } = require('../controller/OrderController');

router.get('/', getOrders);
router.get('/:id', getOrdersById);
router.post('/checkout', orderCheckout);
router.post('/update', protectedRoute, adminProtectedRoute, updateOrderStatus);
router.get('/delete/:id', protectedRoute, adminProtectedRoute, deleteOrder);




module.exports = router;