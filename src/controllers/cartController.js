const Cart = require('../models/cart');
const Product = require('../models/product');

exports.addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const cartItem = await Cart.create({ userId, productId, quantity });
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCartItems = async (req, res) => {
    try {
        const { userId } = req.params;
        const cartItems = await Cart.findAll({ where: { userId } });
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
