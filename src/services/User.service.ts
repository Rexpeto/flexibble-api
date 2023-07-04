import UserInterface from "../interfaces/User.interface";
import { AuthLogin, AuthRegister } from "../interfaces/authUser.interface";
import User from "../models/User.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { signToken } from "../utils/jwt.handle";

export const registerNewUser = async ({
    name,
    email,
    password
}: AuthRegister) => {
    const checkIs: UserInterface | null = await User.findOne({ email });

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

export const loginUser = async ({ email, password }: AuthLogin) => {
    try {
        const checkIs: UserInterface | null = await User.findOne({ email });

        if (!checkIs) {
            return { msg: "El usuario o la contraseña es incorrecta" };
        }

        const passwordHash = checkIs.password;
        const isCorrect = await verified(password, passwordHash);

        if (!isCorrect) {
            return { msg: "El usuario o la contraseña es incorrecta" };
        }

        const { _id, name, email: emailUser, avatarUrl } = checkIs;
        const jwt = signToken(_id, name, emailUser);

        return {
            _id,
            name,
            email: emailUser,
            avatarUrl,
            accessToken: jwt
        };
    } catch (e) {
        console.log(e);
        return { msg: "El usuario o la contraseña es incorrecta" };
    }
};
