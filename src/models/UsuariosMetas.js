import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const UsuariosMetas = sequelize.define(
  "usuariosmetas",
  {
    usuario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "usuarios",
        key: "id",
      },
      field: "usuario_id",
    },
    meta_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "metas",
        key: "id",
      },
      field: "meta_id",
    },
  },
  {
    timestamps: false,
  }
);
