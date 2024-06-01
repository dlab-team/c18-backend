import { Router } from "express";
import {
  getEntrevistas,
  postEntrevista,
  getEntrevistaPorId,
  putEntrevistaPorId,
  deleteEntrevistaPorId,
} from "../controllers/registroEntrevistasController.js";

const router = Router();

router.get("/", getEntrevistas);
router.post("/", postEntrevista);
router.get("/:id", getEntrevistaPorId);
router.put("/:id", putEntrevistaPorId);
router.delete("/:id", deleteEntrevistaPorId);

export default router;
