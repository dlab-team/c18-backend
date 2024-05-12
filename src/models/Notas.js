import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Notas = sequelize.define("notas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: "Clave primaria",
  },
  texto: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  empleo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "empleos",
      key: "id",
    },
  },
});
