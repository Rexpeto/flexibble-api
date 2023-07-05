import { ObjectId, SchemaDefinitionProperty } from "mongoose";

interface ProjectInterface {
    title: string;
    description: string;
    image?: string;
    liveSiteUrl?: string;
    githubUrl?: string;
    category: string;
    createBy: SchemaDefinitionProperty<ObjectId>;
}

export default ProjectInterface;
