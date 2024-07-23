const express = require('express');
const { addToCart, listCartItems } = require('../controllers/cartController');
const router = express.Router();

router.post('/cart', addToCart);
router.get('/cart/:userId', listCartItems);

module.exports = router;
