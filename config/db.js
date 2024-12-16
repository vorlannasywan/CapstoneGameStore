import 'dotenv/config';  // Load the environment variables from .env file
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,  // Set to true if you want to see SQL queries
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection established successfully.');
        await sequelize.sync({ alter: true }); // Sync models to the database
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
};

export { sequelize, connectDB };
