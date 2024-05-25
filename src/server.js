import express from "express";
import swaggerDocs from "./docs/swagger.cjs";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

routes(app);

app.get("/", (req, res) => {
  res.send("c18 API");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
  swaggerDocs(app, port);
});
