import { Router } from "express";
import { updateUserCtrl } from "@/controllers/User.controller";
import sessionActive from "@/middleware/session";
import { uploadImgUser } from "@/middleware/file";

export const router = Router();

/**
 * @swagger
 * /user/update:
 *   put:
 *     summary: Update user.
 *     description: Updates the user with the information provided. You need to use user authentication.
 *     tags: [User]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  name:
 *                      type: string
 *                      description: The user's name.
 *                      example: Leanne David Graham
 *                  email:
 *                      type: string
 *                      description: The user's email.
 *                      example: leanne@example.com
 *                  avatarUrl:
 *                      type: string
 *                      description: The user's avatar.
 *                      example: file form data
 *                  githubUrl:
 *                      type: string
 *                      description: The profile github url.
 *                      example: https://github.com/leanndavidgraham
 *                  linkedinUrl:
 *                      type: string
 *                      description: The profile linkedin url.
 *                      example: https://www.linkedin.com/in/leanndavidgraham
 *               components:
 *                 securitySchemes:
 *                  bearerAuth:
 *                    type: "http"
 *                    scheme: "bearer"
 *                    bearerFormat: "JWT"
 *                    description: JWT token
 *     responses:
 *       403:
 *         description: Update error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                     type: string
 *                     description: The error message.
 *                     example: Oops! Ocurrio un error
 *       200:
 *         description: User updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  _id:
 *                      type: string
 *                      description: The user ID.
 *                      example: 5e1b7a0d3f9b2e1b7a0d3f9b
 *                  name:
 *                      type: string
 *                      description: The new user's name.
 *                      example: Leanne David Graham
 *                  email:
 *                      type: string
 *                      description: The new user's email.
 *                      example: leanne@example.com
 *                  avatarUrl:
 *                      type: string
 *                      description: The new user's avatar.
 *                      example: file form data
 *                  githubUrl:
 *                      type: string
 *                      description: The new profile github url.
 *                      example: https://github.com/leanndavidgraham
 *                  linkedinUrl:
 *                      type: string
 *                      description: The new profile linkedin url.
 *                      example: https://www.linkedin.com/in/leanndavidgraham
 *                  projects:
 *                      type: array
 *                      items:
 *                          type: string
 *                          example: 5e1b7a0d3f9b2e1b7a0d3f9b
 *                          description: The user's projects
 *
 *           */

router.put(
  "/update",
  sessionActive,
  uploadImgUser.single("avatarUrl"),
  updateUserCtrl
);
