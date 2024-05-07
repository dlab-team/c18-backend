import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Empleos } from "./Empleos.js";

export const RegistroEntrevistas = sequelize.define(
  "RegistroEntrevistas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "Clave primaria",
    },
    fecha_entrevista: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Fecha de la entrevista",
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "Estado de la entrevista",
    },
  },
  {
    tableName: "registros_entrevistas",
  }
);

// Relacion uno a muchos InterviewRecord - Empleos

RegistroEntrevistas.hasMany(Empleos, {
  foreignKey: {
    name: "id",
    allowNull: false,
  },
});
Empleos.belongsTo(RegistroEntrevistas, {
  foreignKey: {
    name: "id",
    allowNull: false,
  },
});