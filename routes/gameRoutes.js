const express = require('express');
const { createGame, getAllGames, getGameById, updateGame, deleteGame } = require('../controllers/gameController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, isAdmin, createGame);
<<<<<<< HEAD
router.get('/', getAllGames);
router.get('/:id', getGameById);
router.put('/:id', verifyToken, isAdmin, updateGame);
router.delete('/:id', verifyToken, isAdmin, deleteGame);

module.exports = router;
=======
router.get('/', verifyToken, getAllGames);
router.get('/:id', verifyToken, getGameById);
router.put('/:id', verifyToken, isAdmin, updateGame);
router.delete('/:id', verifyToken, isAdmin, deleteGame);

module.exports = router;
>>>>>>> e58e611ab9d5510f2a991d14fdf80ad1dd5f7686
