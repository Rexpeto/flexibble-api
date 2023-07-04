import { ObjectId, SchemaDefinition, SchemaDefinitionProperty } from "mongoose";

interface UserInterface {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
    description?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    projects: SchemaDefinitionProperty<ObjectId[]>;
}

export default UserInterface;
