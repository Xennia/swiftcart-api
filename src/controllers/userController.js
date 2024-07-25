const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json(user);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user || (password && !(await bcrypt.compare(password, user.password)))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: error.message });
    }
};
