import { Router } from "express";
import {
  deleteUsuariosPorId,
  getUsuarios,
  getUsuariosPorId,
  postUsuarios,
  putUsuariosPorId,
} from "../controllers/usuariosController.js";

const router = Router();

// Rutas para los usuarios
router.get("/usuarios", getUsuarios);
router.post("/usuarios", postUsuarios);
router.get("/usuarios/:id", getUsuariosPorId);
router.put("/usuarios/:id", putUsuariosPorId);
router.delete("/usuarios/:id", deleteUsuariosPorId);

export default router;
