import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import bcrypt from 'bcrypt';

import { Metas } from "./Metas.js";
import { Metricas } from "./Metricas.js";
import { RegistroEntrevistas } from "./RegistroEntrevistas.js";

export const Usuarios = sequelize.define("usuarios", {
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
  pais: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^[\p{LC} ]+$/u,
        msg: "Country can only contain letters and spaces",
      },
    },
  },
  experiencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: "Experience must be an integer",
      },
    },
  },
  educacion: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^[\p{LC} ]+$/u,
        msg: "Education can only contain letters and spaces",
      },
    },
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^[\p{LC} ]+$/u,
        msg: "Role can only contain letters and spaces",
      },
    },
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: {
        args: /^[\p{LC} ]+$/u,
        msg: "Role type can only contain letters and spaces",
      },
    },
  }
}, {
  hooks: {
    beforeCreate: async(usuario) => {
      usuario.contrasena = bcrypt.hashSync(usuario.contrasena, 12)
    }
  }
});

// Relacion 1 a 1 Usuarios - Metricas

Usuarios.hasOne(Metricas, {
  foreignKey: {
    name: "usuario_id",
  },
});
Metricas.belongsTo(Usuarios, {
  foreignKey: {
    name: "usuario_id",
  },
});

// Relacion 1 a 1 Usuarios - MetasSemanalesAplicaciones

Usuarios.hasOne(Metas, {
  foreignKey: {
    name: "usuario_id",
  },
});

Metas.belongsTo(Usuarios, {
  foreignKey: {
    name: "usuario_id",
  },
});
// Relacion 1 a muchos Usuarios - InterviewRecord

Usuarios.hasMany(RegistroEntrevistas, {
  foreignKey: {
    name: "usuario_id",
    sourceKey: "id",
  },
});
RegistroEntrevistas.belongsTo(Usuarios, {
  foreignKey: "usuario_id",
  targetKey: "id",
});
