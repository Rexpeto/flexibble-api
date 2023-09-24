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

/**
 * @swagger
 * /project/search/{id}:
 *   post:
 *     summary: Get project by id.
 *     description: Shows project by id.
 *     tags: [Project]
 *     security:
 *     - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          description: The id of the project
 *     responses:
 *       200:
 *         description: Show project
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Project"
 *       400:
 *         description: Not authentication
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                msg:
 *                    type: string
 *                    description: The error message
 *                    example: Inicie sesión
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                msg:
 *                    type: string
 *                    description: The error message
 *                    example: El proyecto no existe
 *              */

router.post("/search/:id", sessionActive, getProject);

/**
 * @swagger
 * /project/newProject:
 *   post:
 *     summary: Create new project.
 *     description: Create user project
 *     tags: [Project]
 *     security:
 *     - bearerAuth: []
 *     requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                description: The project's title
 *                example: landing page crypto
 *                required: true
 *              description:
 *                type: string
 *                description: The project's description
 *                example: landing page crypto
 *                required: true
 *              category:
 *                type: string
 *                description: The project's category
 *                example: web design
 *                required: true
 *              liveSiteUrl:
 *                type: string
 *                description: The project's live site url
 *                example: https://example.com
 *              githubUrl:
 *                type: string
 *                description: The project's github url
 *                example: https://github.com/
 *              image:
 *                type: string
 *                description: The project's image
 *                example: file form data
 *                format: binary
 *     responses:
 *       200:
 *         description: Show project
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Project"
 *       400:
 *         description: Not authentication
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                msg:
 *                    type: string
 *                    description: The error message
 *                    example: Inicie sesión
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                msg:
 *                    type: string
 *                    description: The error message
 *                    example: El proyecto no existe
 *              */
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
