import { Router } from "express";
import {
  deleteEmpleosPorId,
  getEmpleos,
  getEmpleosPorId,
  postEmpleos,
  putEmpleosPorId,
} from "../controllers/empleosController.js";

const router = Router();

router.get("/", getEmpleos);
router.post("/", postEmpleos);
router.get("/:id", getEmpleosPorId);
router.put("/:id", putEmpleosPorId);
router.delete("/:id", deleteEmpleosPorId);

export default router;
