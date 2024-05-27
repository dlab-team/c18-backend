import autenticacionRoutes from "./autenticacion.routes.js";
import empleosRoutes from "./empleos.routes.js";
import metas from "./metas.routes.js";
import metricasRoutes from "./metricas.routes.js";
import notasRoutes from "./notas.routes.js";
import registroEntrevistasRoutes from "./registroEntrevistas.routes.js";
import usuariosRoutes from "./usuarios.routes.js";

import { requiereAuth, rolAccess } from "../middleware/auth.js";

export default (app) => {
  app.use(autenticacionRoutes);
  app.use(empleosRoutes);
  app.use(metas);
  app.use(notasRoutes);
  app.use(registroEntrevistasRoutes);
  app.use(usuariosRoutes);
  app.use(requiereAuth, rolAccess({ roles: ["user"] }), metricasRoutes);
};
