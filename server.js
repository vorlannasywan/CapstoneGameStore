import dotenv from 'dotenv';
import express from 'express';
import { connectDB, sequelize } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import gameRoutes from './routes/gameRoutes.js';
import migration from './migration/add_columns_to_games.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/games', gameRoutes);

const runMigrations = async () => {
    try {
        console.log('Running migration...');
        await migration.up(sequelize.getQueryInterface());
        console.log('Migration completed successfully!');
    } catch (error) {
        console.error('Migration failed:', error);
    }
};

const initializeApp = async () => {
    try {
        await connectDB();
        console.log('Database connected successfully');
        await runMigrations();
    } catch (error) {
        console.error('Failed to initialize app:', error.message);
        process.exit(1);
    }
};

app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await initializeApp();
});
