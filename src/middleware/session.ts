import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface ReqExt extends Request {
    user?: JwtPayload | string;
}

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
