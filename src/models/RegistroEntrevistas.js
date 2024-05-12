import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Empleos } from "./Empleos.js";

export const RegistroEntrevistas = sequelize.define("registroEntrevistas", {
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
});

// Relacion uno a muchos InterviewRecord - Empleos

RegistroEntrevistas.hasMany(Empleos, {
  foreignKey: {
    name: "registroEntrevista_id",
    allowNull: false,
  },
});
Empleos.belongsTo(RegistroEntrevistas, {
  foreignKey: {
    name: "registroEntrevista_id",
    allowNull: false,
  },
});
