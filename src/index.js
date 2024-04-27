import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/InterviewRecord.js";

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync();
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log("No se ha podido conectar al servidor", error);
  }
})();

app.get("/", (req, res) => {
  res.send("(*_*)");
});
