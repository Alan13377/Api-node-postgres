import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (request, response) => {
  try {
    const projects = await Project.findAll();
    response.json(projects);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const getProject = async (request, response) => {
  try {
    const { id } = request.params;
    const project = await Project.findOne({
      where: {
        id: id,
      },
    });
    if (!project)
      return response.status(404).json({ message: "El proyecto no existe" });
    response.json(project);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const createProject = async (request, response) => {
  const { name, priority, description } = request.body;

  //Guardar en la base
  try {
    const newProject = await Project.create({
      name: name,
      priority: priority,
      description: description,
    });

    response.json(newProject);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const updateProyect = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, priority, description } = request.body;

    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    console.log(project);

    await project.save();
    response.json(project);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const deleteProyect = async (request, response) => {
  try {
    const { id } = request.params;
    await Project.destroy({
      where: {
        id,
      },
    });
    response.sendStatus(204);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const getProjectTask = async (request, response) => {
  const { id } = request.params;

  const task = await Task.findAll({
    where: { projectId: id },
  });

  response.json(task);
};
