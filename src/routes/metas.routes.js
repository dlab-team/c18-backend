import { Router } from "express";
import {
  createMeta,
  deleteMetaById,
  getMetaById,
  getMetas,
  updateMetaById,
} from "../controllers/metasController.js";

const router = Router();

router.get("/", getMetas);
router.post("/", createMeta);
router.get("/:id", getMetaById);
router.put("/:id", updateMetaById);
router.delete("/:id", deleteMetaById);

export default router;
