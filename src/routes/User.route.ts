import { Router } from "express";
import { updateUserCtrl } from "../controllers/User.controller";
import sessionActive from "../middleware/session";
import { uploadImgUser } from "../middleware/file";

export const router = Router();

router.post(
    "/update",
    sessionActive,
    uploadImgUser.single("avatarUrl"),
    updateUserCtrl
);
