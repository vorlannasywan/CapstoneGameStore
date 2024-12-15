const express = require('express');
const { createGame, getAllGames, getGameById, updateGame, deleteGame } = require('../controllers/gameController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, isAdmin, createGame);
router.get('/', getAllGames);
router.get('/:id', getGameById);
router.put('/:id', verifyToken, isAdmin, updateGame);
router.delete('/:id', verifyToken, isAdmin, deleteGame);

module.exports = router;