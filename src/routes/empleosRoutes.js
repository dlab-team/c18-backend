import { Router } from "express";
import {
  getEmpleos,
  postEmpleos,
  getEmpleosPorId,
  putEmpleosPorId,
  deleteEmpleosPorId,
} from "../controllers/empleosController.js";

const router = Router();

router.get("/empleos", getEmpleos);
router.post("/empleos", postEmpleos);
router.get("/empleos/:id", getEmpleosPorId);
router.put("/empleos/:id", putEmpleosPorId);
router.delete("/empleos/:id", deleteEmpleosPorId);

export default router;
