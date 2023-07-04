import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/User.controller";

export const router = Router();

router.post("/login", loginCtrl);
router.post("/register", registerCtrl);
