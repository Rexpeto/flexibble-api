import { NextFunction, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import ReqExt from "../interfaces/ReqExt.interface";

const sessionActive = (req: ReqExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization ?? null;
        const jwt = jwtByUser?.split(" ").pop();

        const isUser = verifyToken(`${jwt}`);

        if (!isUser) {
            return res.status(401).json({ msg: "Token inválido" });
        }

        req.user = isUser;
        next();
    } catch (e) {
        res.status(400).json({ msg: "Inicie sesión" });
    }
};

export default sessionActive;
