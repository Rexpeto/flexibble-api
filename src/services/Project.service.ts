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
