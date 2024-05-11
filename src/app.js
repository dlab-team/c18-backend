import express from "express";
import metricasRoutes from "./routes/metricas.routes.js";

import empleosRoutes from "./routes/empleos.routes.js";
import metasSemanalesAplicacionesRoutes from "./routes/metasSemanalesAplicaciones.routes.js";
import notasRoutes from "./routes/notas.routes.js";
import registroEntrevistasRoutes from "./routes/registroEntrevistas.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(metricasRoutes)

// rutas importadas
app.use(empleosRoutes);
app.use(notasRoutes);
app.use(usuariosRoutes);
app.use(registroEntrevistasRoutes);
app.use(metasSemanalesAplicacionesRoutes);

export default app;
