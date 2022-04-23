import { DataTypes, Sequelize } from "sequelize";
const sqConnection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export const Workspaces = sqConnection.define("workspaces", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  },
  domain_id: {
    type: DataTypes.TEXT,
    references: {
      model: "domains",
      key: "domain_id",
    },
  },
  workspace_id: {
    type: DataTypes.TEXT,
    primaryKey: true,
  },
  workspace_name: {
    type: DataTypes.TEXT,
  },
});
