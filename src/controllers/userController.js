const User = require('../models/users');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log('Registering user:', { username, email });

        const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
        console.log('Hashed Password:', hashedPassword);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        console.log('User registered:', user);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    // Login logic
};
