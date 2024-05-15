import express from "express";

import empleosRoutes from "./routes/empleos.routes.js";
import metas from "./routes/metas.routes.js";
import metricasRoutes from "./routes/metricas.routes.js";
import notasRoutes from "./routes/notas.routes.js";
import registroEntrevistasRoutes from "./routes/registroEntrevistas.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});
// rutas importadas
app.use(metricasRoutes);
app.use(empleosRoutes);
app.use(notasRoutes);
app.use(usuariosRoutes);
app.use(registroEntrevistasRoutes);
app.use(metas);

app.get("/", (req, res) => {
  res.send("(*_*)");
});
