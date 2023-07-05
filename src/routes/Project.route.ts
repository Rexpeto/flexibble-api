import { Router } from "express";
import sessionActive from "../middleware/session";
import { getProjects, setProject } from "../controllers/Project.controller";
import { uploadImgProject } from "../middleware/file";

export const router = Router();

router.get("/", getProjects);
router.post(
    "/newProject",
    sessionActive,
    uploadImgProject.single("image"),
    setProject
);
