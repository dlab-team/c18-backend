import express from "express";
import routes from "./routes/index.js";
import swaggerDocs from "./v1/swagger.cjs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas importadas
routes(app);

app.get("/", (req, res) => {
  res.send("c18 API");
});
app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
  swaggerDocs(app, 3000);
});
