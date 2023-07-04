import { ObjectId, SchemaDefinition, SchemaDefinitionProperty } from "mongoose";
import ProjectInterface from "./Project.interface";

interface UserInterface {
    name: string;
    email: string;
    avatarUrl: string;
    description?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    projects: SchemaDefinitionProperty<ObjectId[]>;
}

export default UserInterface;
