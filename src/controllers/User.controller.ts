import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";
import { registerNewUser } from "../services/User.service";

/*
 * Login user
 * @returns
 * */
export const loginCtrl = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    try {
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
