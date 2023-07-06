import mongoose, { Schema, model } from "mongoose";
import UserInterface from "../interfaces/User.interface";

const UserSchema = new Schema <UserInterface>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String,
        default: `${process.env.IP_PUBLIC_SERVER}${process.env.ROUTE_PROFILE}profile.png`
    },
    description: {
        type: String
    },
    githubUrl: {
        type: String
    },
    linkedinUrl: {
        type: String
    },
    projects: [
        {
             type: mongoose.Schema.Types.ObjectId,
             ref: 'Project'
        }
    ]
},  {
        timestamps: true,
    }
);

const User = model('User', UserSchema);

export default User;
