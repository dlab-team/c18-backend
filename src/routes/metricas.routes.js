import { Router } from "express";

import { deleteMetricasPorId, getMetricas, getMetricasPorId, postMetricas, putMetricasPorId } from "../controllers/metricas.controller.js";

const router = Router();

router.get('/metricas', getMetricas);
router.post('/metricas', postMetricas);
router.get('/metricas/:id', getMetricasPorId);
router.put('/metricas/:id', putMetricasPorId);
router.delete('/metricas/:id', deleteMetricasPorId);

export default router;

