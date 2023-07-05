import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";
import { getAllProjects } from "../services/Project.service";

/*
 * Search project by name
 * @returns
 * */
export const getProject = async (req: Request, res: Response) => {
    try {
        const response = await getAllProjects();

        res.status(200).json({ response });
    } catch (e) {
        handleHttp(res, "Oops!! Ocurrio un error", e);
    }
};

/*
 * All projects
 * @returns
 * */
export const getProjects = (req: Request, res: Response) => {};

/*
 * Create project
 * @returns
 * */
export const setProject = (req: Request, res: Response) => {};

/*
 * Update project
 * @returns
 * */
export const updateProject = (req: Request, res: Response) => {};

/*
 * Delete project
 * @returns
 * */
export const deleteProject = (req: Request, res: Response) => {};
