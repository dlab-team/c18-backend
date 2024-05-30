import { Router } from "express";
import {
  activar,
  login,
  logout,
} from "../controllers/autenticacionController.js";
import { invalidarToken, requiereAuth } from "../middleware/auth.js";

const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.put("/activar", requiereAuth, invalidarToken, activar);

export default router;
