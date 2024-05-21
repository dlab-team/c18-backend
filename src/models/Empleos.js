import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Notas } from "./Notas.js";

export const Empleos = sequelize.define("empleos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^[\p{LC} ]+$/u,
        msg: "Title can only contain letters and spaces",
      },
    },
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^[\p{LC} ]+$/u,
        msg: "Enterprise contain letters and spaces",
      },
    },
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^[\p{LC} ]+$/u,
        msg: "Vacancy contain letters and spaces",
      },
    },
  },
  url: {
    type: DataTypes.STRING,
    validate: {
      isUrl: {
        args: true,
        msg: "The URL is invalid",
      },
    },
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: "La descripción es obligatoria.",
      },
    },
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^[\p{LC} ]+$/u,
        msg: "Location can only contain letters and spaces",
      },
    },
  },
  tipo_empleo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^[\p{LC} ]+$/u,
        msg: "Employment can only contain letters and spaces",
      },
    },
  },
  salario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      isDecimal: {
        args: [10, 2],
        msg: "Salary must be decimals",
      },
    },
  },
  registroEntrevista_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      isInt: {
        msg: "Interview record must be an integer",
      },
    },
  },
});

// Relacion uno a muchos Empleos - Notas

Empleos.hasMany(Notas, {
  foreignKey: {
    name: "empleo_id",
    sourceKey: "id",
  },
});

Notas.belongsTo(Empleos, {
  foreignKey: {
    name: "empleo_id",
    targetKey: "id",
  },
});
