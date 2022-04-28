import { Task } from "../models/Task.js";

export const getTasks = async (request, response) => {
  try {
    const tasks = await Task.findAll();
    response.json(tasks);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
export const createTask = async (request, response) => {
  try {
    const { name, done, projectId } = request.body;
    const newTask = await Task.create({
      name: name,
      done: done,
      projectId: projectId,
    });
    response.json(newTask);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const getTask = async (request, response) => {
  const { id } = request.params;

  try {
    const task = await Task.findOne({
      where: { id: id },
      //attributes:["name"] -- obtener un solo campo de la consulta
    });
    response.json(tasks);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const updateTask = async (request, response) => {
  try {
    const { id } = request.params;

    const task = await Task.findOne({
      where: { id },
    });

    task.set(request.body);
    await task.save();

    return response.json(task);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (request, response) => {
  const { id } = request.params;
  try {
    const result = await Task.destroy({
      where: { id },
    });
    console.log(result);
    return response.sendStatus(204);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
