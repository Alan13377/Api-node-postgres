import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js"; //Conexion a la base
import { Task } from "./Task.js ";
//Crear tabla
export const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

//RELACION ENTRE TABLAS

Project.hasMany(Task, {
  foreignKey: "projectId",
  sourceKey: "id",
}); //Un proyecto tiene muchas tareas

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
}); //Muchas tareas pertenecen a un proyecto
