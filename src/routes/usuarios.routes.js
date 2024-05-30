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
  "/",
  requiereAuth,
  rolAccess({ roles: ["admin"] }),
  getUsuarios
);
router.post("/", postUsuarios);
router.get(
  "/:id",
  requiereAuth,
  rolAccess({ roles: ["admin"] }),
  getUsuariosPorId
);
router.put(
  "/:id",
  requiereAuth,
  rolAccess({ roles: ["admin"] }),
  putUsuariosPorId
);
router.delete(
  "/:id",
  requiereAuth,
  rolAccess({ roles: ["admin"] }),
  deleteUsuariosPorId
);

export default router;
