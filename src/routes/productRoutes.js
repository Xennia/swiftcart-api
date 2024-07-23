const express = require('express');
const { listProducts } = require('../controllers/productController');
const router = express.Router();

router.get('/products', listProducts);

module.exports = router;
