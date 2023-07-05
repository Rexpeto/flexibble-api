import { Router } from "express";
import sessionActive from "../middleware/session";
import { getProjects } from "../controllers/Project.controller";

export const router = Router();

router.get("/", getProjects);
