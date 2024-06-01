import autenticacionRoutes from "./autenticacion.routes.js";
import empleosRoutes from "./empleos.routes.js";
import metas from "./metas.routes.js";
import metricasRoutes from "./metricas.routes.js";
import notasRoutes from "./notas.routes.js";
import registroEntrevistasRoutes from "./registroEntrevistas.routes.js";
import usuariosRoutes from "./usuarios.routes.js";
import passwordRoutes from "./password.routes.js";

import { requiereAuth, rolAccess } from "../middleware/auth.js";

export default (app) => {
  app.use("/autenticacion", autenticacionRoutes);
  app.use("/usuarios", usuariosRoutes);
  app.use("/password", passwordRoutes);
  app.use(
    "/empleos",
    requiereAuth,
    rolAccess({ roles: ["user", "admin"] }),
    empleosRoutes
  );
  app.use(
    "/metas",
    requiereAuth,
    rolAccess({ roles: ["user", "admin"] }),
    metas
  );
  app.use(
    "/notas",
    requiereAuth,
    rolAccess({ roles: ["user", "admin"] }),
    notasRoutes
  );
  app.use(
    "/entrevistas",
    requiereAuth,
    rolAccess({ roles: ["user", "admin"] }),
    registroEntrevistasRoutes
  );
  app.use(
    "/metricas",
    requiereAuth,
    rolAccess({ roles: ["user", "admin"] }),
    metricasRoutes
  );
};
