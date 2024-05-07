import express from "express";

import empleosRoutes from "./routes/empleos.routes.js";
import notasRoutes from "./routes/notas.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import registroEntrevistasRoutes from "./routes/registroEntrevistas.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas importadas
app.use(empleosRoutes);
app.use(notasRoutes);
app.use(usuariosRoutes);
app.use(registroEntrevistasRoutes);

export default app;
