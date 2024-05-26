import empleosRoutes from "./empleos.routes.js";
import metas from "./metas.routes.js";
import metricasRoutes from "./metricas.routes.js";
import notasRoutes from "./notas.routes.js";
import registroEntrevistasRoutes from "./registroEntrevistas.routes.js";
import usuariosRoutes from "./usuarios.routes.js";
import autenticacionRoutes from "./autenticacion.routes.js"

export default (app) => {
  app.use(usuariosRoutes);
  app.use(empleosRoutes);
  app.use(metas);
  app.use(metricasRoutes);
  app.use(notasRoutes);
  app.use(registroEntrevistasRoutes);
  app.use(autenticacionRoutes);
};
