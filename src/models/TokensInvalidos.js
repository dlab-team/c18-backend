import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const TokensInvalidos = sequelize.define("tokensInvalidos", {
  token:{
    type:DataTypes.STRING,
    allowNull: false
  }
});
