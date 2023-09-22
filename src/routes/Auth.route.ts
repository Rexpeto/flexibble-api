import { Router } from "express";
import { loginCtrl, registerCtrl } from "@/controllers/User.controller";

export const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user.
 *     description: Login of user.
 *     tags: [Auth]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                  type: string
 *                  description: The user's email.
 *                  example: email@example.com
 *                 password:
 *                  type: string
 *                  description: The user's password.
 *                  example: 123456
 *     responses:
 *       401:
 *         description: Invalid credentials.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                     type: string
 *                     description: The error message.
 *                     example: El usuario o la contraseña es incorrecta
 *       200:
 *         description: User logged.
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
 *                      description: The user's name.
 *                      example: Leanne Graham
 *                  email:
 *                      type: string
 *                      description: The user's email.
 *                      example: email@example.com
 *                  avatarUrl:
 *                      type: string
 *                      description: The user's avatar.
 *                      example: https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50
 *                  rol:
 *                      type: string
 *                      description: The user's role.
 *                      example: admin
 *                  accessToken:
 *                      type: string
 *                      description: The user's token.
 *                      example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjY3MjQwMzYyLCJleHAiOjE2NjcyNDA5NjJ9.
 *
 *           */
router.post("/login", loginCtrl);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register user.
 *     description: Register of user.
 *     tags: [Auth]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                  type: string
 *                  description: The user's name.
 *                  example: Leanne Graham
 *                 email:
 *                  type: string
 *                  description: The user's email.
 *                  example: email@example.com
 *                 password:
 *                  type: string
 *                  description: The user's password.
 *                  example: 123456
 *     responses:
 *       401:
 *         description: Reigster error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                     type: string
 *                     description: The error message.
 *                     example: El usuario ya existe
 *       200:
 *         description: Register success.
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
 *                      description: The user's name.
 *                      example: Leanne Graham
 *                  email:
 *                      type: string
 *                      description: The user's email.
 *                      example: email@example.com
 *                  avatarUrl:
 *                      type: string
 *                      description: The user's avatar.
 *                      example: https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50
 *                  rol:
 *                      type: string
 *                      description: The user's role.
 *                      example: admin
 *                  accessToken:
 *                      type: string
 *                      description: The user's token.
 *                      example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjY3MjQwMzYyLCJleHAiOjE2NjcyNDA5NjJ9.
 *                  projects:
 *                      type: array
 *                      items:
 *                          type: string
 *                          exmaple: 5e1b7a0d3f9b2e1b7a0d3f9b
 *                          description: The user's projects
 *
 *           */

router.post("/register", registerCtrl);
