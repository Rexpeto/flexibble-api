import ProjectInterface from "../interfaces/Project.interface";
import Project from "../models/Project.model";

export const getAllProjects = async () => {
    const projects: any = await Project.find();

    return projects;
};

export const createProject = async ({
    title,
    description,
    liveSiteUrl,
    githubUrl,
    category,
    image,
    createBy
}: any) => {
    try {
        if (!title) {
            return { msg: "Debe colocar el titulo" };
        }

        if (!description) {
            return { msg: "Debe colocar una descripción" };
        }

        if (image === "undefined") {
            return { msg: "Debe agregar una imagen" };
        }

        if (!category) {
            return { msg: "Debe agregar una categoría" };
        }

        const data = {
            title,
            description,
            liveSiteUrl: liveSiteUrl ?? "",
            githubUrl: githubUrl ?? "",
            category: category ?? "",
            image: `${process.env.IP_PUBLIC_SERVER}:${process.env.PORT}${process.env.ROUTE_PROJECT}${image}`,
            createBy
        };

        const newProject = await Project.create(data);

        return newProject;
    } catch (e) {
        console.log(e);
        return { error: "Oops!! ocurrio un error" };
    }
};

export const getProjectId = async (id: string) => {
    try {
        const project = await Project.findById(id);

        if (!project) {
            return { msg: "El proyecto no existe" };
        }

        return project;
    } catch (e) {
        return { msg: "No existe el proyecto" };
    }
};

export const updateProjectId = async (
    _id: string,
    idUser: string,
    data: ProjectInterface,
    image: string
) => {
    try {
        if (!_id) {
            return { msg: "Debe indicar un proyecto" };
        }

        const project: any = Project.findOne({ _id, createBy: idUser });

        if (!project) {
            return { msg: "No se encontró el proyecto" };
        }

        const { title, description, githubUrl, liveSiteUrl, category } = data;

        const newTitle = title ? title.toLowerCase() : project?.title;
        const newDescription = description
            ? description.toLowerCase()
            : project?.description;
        const newImage =
            image === "undefined" || ""
                ? project?.image
                : `${process.env.IP_PUBLIC_SERVER}:${process.env.PORT}${process.env.ROUTE_PROJECT}${image}`;
        const newCategory = category
            ? category.toLowerCase()
            : project?.category;
        const newGithub = githubUrl
            ? githubUrl.toLowerCase()
            : project?.githubUrl;
        const newliveSiteUrl = liveSiteUrl
            ? liveSiteUrl.toLowerCase()
            : project?.liveSiteUrl;

        const newProject = {
            title: newTitle,
            description: newDescription,
            image: newImage,
            category: newCategory,
            githubUrl: newGithub,
            liveSiteUrl: newliveSiteUrl
        };

        await Project.updateOne({ _id, createBy: idUser }, newProject);

        return project;
    } catch (e) {
        return { msg: "No se encontró el proyecto" };
    }
};
