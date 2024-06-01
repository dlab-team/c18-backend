import { Router } from 'express';
import { getNotas, postNota, getNotaPorId, putNotaPorId, deleteNotaPorId } from '../controllers/notasController.js';

const router = Router();

// Rutas para las notas
router.get('/', getNotas);
router.post('/', postNota);
router.get('/:id', getNotaPorId);
router.put('/:id', putNotaPorId);
router.delete('/:id', deleteNotaPorId);

export default router;
