import app from "./app.js";
import { sequelize } from "./database/database.js";

import "./models/Empleos.js";
import "./models/InterviewRecord.js";
import "./models/MetasSemanalesAplicaciones.js";
import "./models/Metricas.js";
import "./models/Notas.js";
import "./models/Usuarios.js";

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database connected");
    app.listen(PORT, () =>
      console.log(`Server running on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log("No se ha podido conectar al servidor", error);
  }
})();

app.get("/", (req, res) => {
  res.send("(*_*)");
});
