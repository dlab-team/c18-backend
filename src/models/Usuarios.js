import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { InterviewRecord } from "./InterviewRecord.js";
import { MetasSemanalesAplicaciones } from "./MetasSemanalesAplicaciones.js";
import { Metricas } from "./Metricas.js";


export const Usuarios = sequelize.define(
  "Usuarios",
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

// Relacion 1 a 1 Usuarios - Metricas

Usuarios.hasOne(Metricas, {
  foreignKey: {
    name: "usuario_id",
    sourceKey: "id",
  },
})
Metricas.belongsTo(Usuarios,{
  foreignKey: "usuario_id",
  targetKey: "id",
})

// Relacion 1 a muchos Usuarios - InterviewRecord

Usuarios.hasMany(InterviewRecord, {
  foreignKey: {
    name: "usuario_id",
    sourceKey: "id",
  },
})
InterviewRecord.belongsTo(Usuarios,{
  foreignKey: "usuario_id",
  targetKey: "id",
})


// Relacion 1 a 1 Usuarios - MetasSemanalesAplicaciones

Usuarios.hasOne(MetasSemanalesAplicaciones, {
  foreignKey: {
    name: "usuario_id",
    sourceKey: "id",
  },
})

MetasSemanalesAplicaciones.belongsTo(Usuarios,{
  foreignKey: "usuario_id",
  targetKey: "id",
})
