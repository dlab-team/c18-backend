import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//import bcrypt from "bcrypt";

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
    /*
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Usuarios",
        key: "id",
      },
      comment: "Clave que hace referencia a Usuarios",
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Trabajos",
        key: "id",
      },
      comment: "Clave que hace referencia a Trabajos",
    }, */
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
