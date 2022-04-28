import { Router } from "express";
import {
  createProject,
  deleteProyect,
  getProjects,
  updateProyect,
  getProject,
  getProjectTask,
} from "../controllers/projects.controller.js";
const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateProyect);
router.delete("/projects/:id", deleteProyect);

router.get("/projects/:id", getProject);
router.get("/projects/:id/tasks", getProjectTask);

export default router;
