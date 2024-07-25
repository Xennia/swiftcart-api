const express = require('express');
const { addToCart, listCartItems, deleteFromCart } = require('../controllers/cartController');
const router = express.Router();

router.post('/cart', addToCart);
router.get('/cart/:userId', listCartItems);
router.delete('/cart/:userId/product/:productId', deleteFromCart);

module.exports = router;
