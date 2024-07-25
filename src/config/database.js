const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('swiftcart_db', 'neondb_owner', '0evYzkCE1fUp', {
    host: 'ep-crimson-fire-a5710ucj.us-east-2.aws.neon.tech',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;
