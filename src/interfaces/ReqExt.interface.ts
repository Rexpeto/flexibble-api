import { Request } from "express";

interface ReqExt extends Request {
    user?: any;
}

export default ReqExt;
