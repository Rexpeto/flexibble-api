import { ObjectId, SchemaDefinitionProperty } from "mongoose";

interface UserInterface {
    _id?: string;
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
