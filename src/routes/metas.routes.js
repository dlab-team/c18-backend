import { Router } from "express";
import {
  createMeta,
  deleteMetaById,
  getMetaById,
  getMetas,
  updateMetaById,
} from "../controllers/metasController.js";

const router = Router();

router.get("/metas", getMetas);
router.post("/metas", createMeta);
router.get("/metas/:id", getMetaById);
router.put("/metas/:id", updateMetaById);
router.delete("/metas/:id", deleteMetaById);

export default router;
