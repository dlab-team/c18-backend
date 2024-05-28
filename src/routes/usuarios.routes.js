import { Router } from "express";
import {
  deleteUsuariosPorId,
  getUsuarios,
  getUsuariosPorId,
  postUsuarios,
  putUsuariosPorId,
} from "../controllers/usuariosController.js";

import { requiereAuth, rolAccess } from "../middleware/auth.js";

const router = Router();

// Rutas para los usuarios
router.get(
  "/usuarios",
  requiereAuth,
  rolAccess({ roles: ["admin"] }),
  getUsuarios
);
router.post("/usuarios", postUsuarios);
router.get(
  "/usuarios/:id",
  requiereAuth,
  rolAccess({ roles: ["admin"] }),
  getUsuariosPorId
);
router.put(
  "/usuarios/:id",
  requiereAuth,
  rolAccess({ roles: ["admin"] }),
  putUsuariosPorId
);
router.delete(
  "/usuarios/:id",
  requiereAuth,
  rolAccess({ roles: ["admin"] }),
  deleteUsuariosPorId
);

export default router;
