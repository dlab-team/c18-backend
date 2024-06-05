import { Router } from "express";
import {
  solicitarResetContrasena,
  resetearContrasena,
} from "../controllers/passwordController.js";
import { requiereAuth } from "../middleware/auth.js";

const router = Router();

router.post("/recuperar-contrasena", solicitarResetContrasena);
router.post("/resetear-contrasena", requiereAuth, resetearContrasena);

export default router;
