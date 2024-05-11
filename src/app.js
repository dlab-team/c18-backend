import express from "express";
import metricasRoutes from "./routes/metricas.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(metricasRoutes)
export default app;
