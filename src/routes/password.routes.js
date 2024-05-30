import { Router } from "express";
import {
  solicitarResetContrasena,
  resetearContrasena,
} from "../controllers/passwordController.js";

const router = Router();

router.post("/recuperar-contrasena", solicitarResetContrasena);
router.post("/resetear-contrasena", resetearContrasena);

export default router;
