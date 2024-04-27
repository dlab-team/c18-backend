import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Usuario = sequelize.define(
  "Usuario",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[\p{LC} ]+$/u,
          msg: "Name can only contain letters and spaces",
        },
      },
    },
    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Invalid email",
        },
      },
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 255],
          msg: "Password must be at least 8 characters long",
        },
      },
    },
    pais:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[\p{LC} ]+$/u,
          msg: "Country can only contain letters and spaces",
        },
      },
    },
    experiencia:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "Experience must be an integer",
        },
      },
    },
    educacion:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[\p{LC} ]+$/u,
          msg: "Education can only contain letters and spaces",
        },
      },
    },
    rol:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[\p{LC} ]+$/u,
          msg: "Role can only contain letters and spaces",
        },
      },
    },
  }
);