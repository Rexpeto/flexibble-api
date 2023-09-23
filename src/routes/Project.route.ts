import { Router } from "express";
import sessionActive from "@/middleware/session";
import {
  deleteProject,
  getProject,
  getProjects,
  setProject,
  updateProject,
} from "@/controllers/Project.controller";
import { uploadImgProject } from "@/middleware/file";

export const router = Router();

/**
 * @swagger
 * /project:
 *   get:
 *     summary: Get all projects.
 *     description: Shows all registered projects
 *     tags: [Project]
 *     responses:
 *        200:
 *         description: Show all projects of the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                   $ref: "#/components/schemas/Project"
 *
 *
 *           */
router.get("/", getProjects);

router.post("/search/:id", sessionActive, getProject);

router.post(
  "/newProject",
  sessionActive,
  uploadImgProject.single("image"),
  setProject
);

router.post(
  "/update/:id",
  sessionActive,
  uploadImgProject.single("image"),
  updateProject
);

router.post("/delete/:id", sessionActive, deleteProject);
