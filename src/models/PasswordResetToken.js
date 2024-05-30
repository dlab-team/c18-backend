import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Usuarios } from "./Usuarios.js";

export const PasswordResetToken = sequelize.define("PasswordResetToken", {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuarios,
      key: "id",
    },
  },
  expiracion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
