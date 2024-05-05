import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Empleos } from "./Empleos.js";

export const InterviewRecord = sequelize.define(
  "InterviewRecord",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "Primary Key",
    },
    interview_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Interview date",
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "Status of the interview",
    },
  },
  {
    tableName: "interview_records",
  }
);

// Relacion uno a muchos InterviewRecord - Empleos

InterviewRecord.hasMany(Empleos, {
  foreignKey: {
    name: "id",
    allowNull: false,
  },
});
Empleos.belongsTo(InterviewRecord, {
  foreignKey: {
    name: "id",
    allowNull: false,
  },
});