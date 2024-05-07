import { Router } from "express";
import {
  getEntrevistas,
  postEntrevista,
  getEntrevistaPorId,
  putEntrevistaPorId,
  deleteEntrevistaPorId,
} from "../controllers/registroEntrevistasController.js";

const router = Router();

router.get("/entrevistas", getEntrevistas);
router.post("/entrevistas", postEntrevista);
router.get("/entrevistas/:id", getEntrevistaPorId);
router.put("/entrevistas/:id", putEntrevistaPorId);
router.delete("/entrevistas/:id", deleteEntrevistaPorId);

export default router;
