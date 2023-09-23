import { Request, Response } from "express";
import handleHttp from "@/utils/error.handle";
import {
  createProject,
  deleteProjectId,
  getAllProjects,
  getProjectId,
  updateProjectId,
} from "@/services/Project.service";
import ProjectInterface from "@/interfaces/Project.interface";
import ReqExt from "@/interfaces/ReqExt.interface";

/*
 * Search project by name
 * @returns
 * */
export const getProject = async ({ params }: Request, res: Response) => {
  const { id } = params;

  try {
    if (id.length < 24) {
      return res.status(404).json({ msg: "Debe enviar un proyecto válido" });
    }

    const response: any = await getProjectId(id);

    if (response.msg) {
      return res.status(404).json(response);
    }

    res.status(200).json(response);
  } catch (e) {
    handleHttp(res, "Oops Ocurrio un error", e);
  }
};

/*
 * All projects
 * @returns
 * */
export const getProjects = async (req: Request, res: Response) => {
  try {
    const response = await getAllProjects();

    res.status(200).json(response);
  } catch (e) {
    handleHttp(res, "Oops!! Ocurrio un error", e);
  }
};

/*
 * Create project
 * @returns
 * */
export const setProject = async (req: ReqExt, res: Response) => {
  const {
    title,
    description,
    liveSiteUrl,
    githubUrl,
    category,
  }: ProjectInterface = req.body;
  const image = `${req.file?.filename}`;
  try {
    const createBy = req?.user?.id;
    const response: any = await createProject({
      title,
      description,
      liveSiteUrl,
      githubUrl,
      category,
      image,
      createBy,
    });

    if (response?.error) {
      return res.status(500).json(response);
    }

    if (response.msg) {
      return res.status(403).json(response);
    }

    res.status(200).json(response);
  } catch (e) {
    handleHttp(res, "Oops!! Ocurrio un error", e);
  }
};

/*
 * Update project
 * @returns
 * */
export const updateProject = async (req: ReqExt, res: Response) => {
  try {
    const { id } = req.params;
    const idUser = req.user?.id;
    const image: any = req.file?.filename;

    if (!id) {
      return res.status(403).json({ msg: "Debe colocar el proyecto a editar" });
    }

    const project: any = await updateProjectId(id, idUser, req.body, image);

    if (project?.msg) {
      return res.status(404).json(project);
    }

    res.status(200).json(project);
  } catch (e) {
    handleHttp(res, "Oops!! Ocurrio un error", e);
  }
};

/*
 * Delete project
 * @returns
 * */
export const deleteProject = async (
  { params, user }: ReqExt,
  res: Response
) => {
  const { id } = params;
  const idUser = user?.id;
  try {
    if (!id) {
      res.status(403).json({ msg: "Debe colocar un proyecto" });
    }

    const response = await deleteProjectId(id, idUser);

    if (response.error) {
      return res.status(404).json(response);
    }

    res.status(200).json(response);
  } catch (e) {
    handleHttp(res, "Oops!! Ocurrio un error", e);
  }
};
