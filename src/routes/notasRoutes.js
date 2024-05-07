import { Router } from 'express';
import { getNotas, postNota, getNotaPorId, putNotaPorId, deleteNotaPorId } from '../controllers/notasController.js';

const router = Router();

// Rutas para las notas
router.get('/notas', getNotas);
router.post('/notas', postNota);
router.get('/notas/:id', getNotaPorId);
router.put('/notas/:id', putNotaPorId);
router.delete('/notas/:id', deleteNotaPorId);

export default router;
