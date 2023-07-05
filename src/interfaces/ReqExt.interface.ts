import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

interface ReqExt extends Request {
    user?: JwtPayload | string;
}

export default ReqExt;
