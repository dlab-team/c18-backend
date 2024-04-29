import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const MetasSemanalesAplicaciones = sequelize.define(
  "MetasSemanalesAplicaciones",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "El ID de usuario debe ser un número entero.",
        },
      },
    },
    semana: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "La semana debe ser un número entero.",
        },
      },
    },
    cantidad_meta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "La cantidad meta debe ser un número entero.",
        },
      },
    },
    cantidad_cumplida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "La cantidad cumplida debe ser un número entero.",
        },
      },
    },
    mes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "El mes debe ser un número entero.",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);
