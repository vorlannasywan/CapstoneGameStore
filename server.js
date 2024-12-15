require('dotenv').config();
const express = require('express');
const { connectDB, sequelize } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const gameRoutes = require('./routes/gameRoutes');
const migration = require('./migration/add_columns_to_games'); // Pastikan path benar

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/games', gameRoutes);

// Fungsi untuk menjalankan migrasi
const runMigrations = async () => {
    try {
        console.log('Running migration...');
        await migration.up(sequelize.getQueryInterface());
        console.log('Migration completed successfully!');
    } catch (error) {
        console.error('Migration failed:', error);
    }
};

// Fungsi untuk menghubungkan database dan menjalankan migrasi
const initializeApp = async () => {
    try {
        await connectDB();
        console.log('Database connected successfully');

        // Jalankan migrasi setelah koneksi database berhasil
        await runMigrations();
    } catch (error) {
        console.error('Failed to initialize app:', error.message);
        process.exit(1);
    }
};

// Mulai server
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await initializeApp(); // Pastikan inisialisasi berjalan
});
