const express = require('express');
const { register, login, listUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/list', listUsers); // New route to list all users

module.exports = router;
