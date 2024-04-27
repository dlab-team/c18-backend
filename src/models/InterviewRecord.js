import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//import bcrypt from "bcrypt";

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
    /*
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      comment: "Foreign key referencing Users",
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Jobs",
        key: "id",
      },
      comment: "Foreign key referencing Jobs",
    }, */
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
