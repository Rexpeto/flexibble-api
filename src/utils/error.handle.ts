import { Response } from "express";

const handleHttp = (res: Response, msg: string, error: any) => {
    console.log(error);
    res.status(500).json({ msg });
};

export default handleHttp;
