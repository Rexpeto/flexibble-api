import Project from "../models/Project.model";

export const getAllProjects = async () => {
    const projects = await Project.find();

    console.log(projects);

    return projects;
};
