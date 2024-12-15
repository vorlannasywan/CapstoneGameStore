const Game = require('../models/Game');

exports.createGame = async (req, res) => {
    try {
        const { title, genre, price, developer, releaseYear, description } = req.body;

        const game = await Game.create({
            title,
            genre,
            price,
            developer,
            releaseYear,
            description,
        });

        res.status(201).json({ message: 'Game created successfully', game });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllGames = async (req, res) => {
    try {
        const games = await Game.findAll();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getGameById = async (req, res) => {
    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) return res.status(404).json({ message: 'Game not found' });
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateGame = async (req, res) => {
    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) return res.status(404).json({ message: 'Game not found' });

        const { title, genre, price, developer, releaseYear, description } = req.body;

        await game.update({ title, genre, price, developer, releaseYear, description });

        res.status(200).json({ message: 'Game updated successfully', game });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteGame = async (req, res) => {
    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) return res.status(404).json({ message: 'Game not found' });

        await game.destroy();
        res.status(200).json({ message: 'Game deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
