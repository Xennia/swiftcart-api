const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api', cartRoutes);

sequelize.sync({ alter: true }) // Ensure database schema is updated
    .then(() => {
        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    })
    .catch(err => console.log(err));
