import express from 'express';
import { createGame, getAllGames, getGameById, updateGame, deleteGame, getGamesByGenre, getGamesByYear } from '../controllers/gameController.js';
import { verifyToken, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, isAdmin, createGame);
router.get('/', getAllGames);
router.get('/:id', getGameById);
router.get('/genre/search', getGamesByGenre); 
router.get('/years/search', getGamesByYear); 
router.put('/:id', verifyToken, isAdmin, updateGame);
router.delete('/:id', verifyToken, isAdmin, deleteGame);

export default router;
