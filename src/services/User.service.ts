import { AuthRegister } from "../interfaces/authUser.interface";
import User from "../models/User.model";
import { encrypt } from "../utils/bcrypt.handle";

export const registerNewUser = async ({
    name,
    email,
    password
}: AuthRegister) => {
    const checkIs: any = await User.findOne({ email });

    if (checkIs) {
        return { msg: "El usuario ya existe" };
    }

    const passwordHash = await encrypt(password);

    const newUser = await User.create({
        name: name.toLowerCase(),
        email: email.toLowerCase(),
        password: passwordHash
    });

    return newUser;
};

export const loginUser = async (email: string, password: string) => {};
