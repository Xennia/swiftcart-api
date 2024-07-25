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
        console.error('Error adding to cart:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.listCartItems = async (req, res) => {
    try {
        const { userId } = req.params;
        const cartItems = await Cart.findAll({ where: { userId }, include: Product });
        res.json(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.deleteFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.params;

        const cartItem = await Cart.findOne({ where: { userId, productId } });
        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        await cartItem.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting cart item:', error);
        res.status(500).json({ message: error.message });
    }
};
