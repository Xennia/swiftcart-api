const Product = require('../models/product');

exports.listProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        console.log('Products fetched:', products); // Log the fetched products
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error); // Log the error
        res.status(500).json({ message: error.message });
    }
};
