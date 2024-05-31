import { Router } from "express";

import { deleteMetricasPorId, getMetricas, getMetricasPorId, postMetricas, putMetricasPorId } from "../controllers/metricas.controller.js";

const router = Router();

router.get('/', getMetricas);
router.post('/', postMetricas);
router.get('/:id', getMetricasPorId);
router.put('/:id', putMetricasPorId);
router.delete('/:id', deleteMetricasPorId);

export default router;
