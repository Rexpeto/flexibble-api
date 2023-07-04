import mongoose, { Schema, model } from "mongoose";
import ProjectInterface from "../interfaces/Project.interface";

const ProjectSchema = new Schema<ProjectInterface>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: 'post.png'
    },
    liveSiteUrl: {
        type: String,
    },
    githubUrl: {
        type: String,
    },
    category: {
        type: String,
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
        timestamps: true
    }
);

const Project = model('Project', ProjectSchema);
export default Project;
