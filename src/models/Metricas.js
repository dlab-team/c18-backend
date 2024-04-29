import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Metricas = sequelize.define("Metricas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: "Clave primaria",
  },
  total_postulaciones: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_entradas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ofertas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  guardados: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
