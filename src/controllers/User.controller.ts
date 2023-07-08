import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";
import {
    loginUser,
    registerNewUser,
    updateUser
} from "../services/User.service";
import ReqExt from "../interfaces/ReqExt.interface";

/*
 * Login user
 * @returns
 * */
export const loginCtrl = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    try {
        const response: any = await loginUser({ email, password });

        if (response.msg) {
            return res.status(401).json(response);
        }

        res.cookie("accessToken", response.accessToken, {
            maxAge: 7200000,
            httpOnly: true,
            sameSite: "lax"
        });

        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, "Oops! Ocurrio un error", e);
    }
};

/*
 * Register user
 * @returns
 * */
export const registerCtrl = async ({ body }: Request, res: Response) => {
    try {
        const response: any = await registerNewUser(body);

        if (response.msg) {
            return res.status(406).json(response);
        }

        res.status(201).json(response);
    } catch (e) {
        handleHttp(res, "Oops! Ocurrio un error", e);
    }
};

/*
 * Update date of user
 * @returns
 * */
export const updateUserCtrl = async (req: ReqExt, res: Response) => {
    try {
        const _id = req.user?.id;
        const fileName = `${req.file?.filename}`;

        const response: any = await updateUser(_id, req.body, fileName);

        if (response?.msg) {
            return res.status(403).json(response);
        }

        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, "Oops!! Ocurrio un error", e);
    }
};
