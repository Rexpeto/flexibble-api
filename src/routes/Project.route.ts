import { Router } from "express";
import sessionActive from "../middleware/session";
import {
    getProject,
    getProjects,
    setProject
} from "../controllers/Project.controller";
import { uploadImgProject } from "../middleware/file";

export const router = Router();

router.get("/", getProjects);
router.post("/search/:id", sessionActive, getProject);
router.post(
    "/newProject",
    sessionActive,
    uploadImgProject.single("image"),
    setProject
);
