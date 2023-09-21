import UserInterface from "../interfaces/User.interface";
import { AuthLogin, AuthRegister } from "../interfaces/authUser.interface";
import User from "../models/User.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { signToken } from "../utils/jwt.handle";

export const registerNewUser = async ({
  name,
  email,
  password,
}: AuthRegister) => {
  const checkIs: UserInterface | null = await User.findOne({ email });

  if (checkIs) {
    return { msg: "El usuario ya existe" };
  }

  const passwordHash = await encrypt(password);

  const newUser = await User.create({
    name: name.toLowerCase(),
    email: email.toLowerCase(),
    password: passwordHash,
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

    const { _id, name, email: emailUser, avatarUrl, rol } = checkIs;
    const jwt = signToken(_id, name, emailUser);

    return {
      _id,
      name,
      email: emailUser,
      avatarUrl,
      rol,
      accessToken: jwt,
    };
  } catch (e) {
    console.log(e);
    return { msg: "El usuario o la contraseña es incorrecta" };
  }
};

export const updateUser = async (
  _id: string,
  { name, email, githubUrl, linkedinUrl }: UserInterface,
  fileName: string
) => {
  try {
    const user = await User.findOne({ _id });

    const avatar = fileName === "undefined" ? user?.avatarUrl : fileName;
    const nameUser = name === undefined ? user?.name : name.toLowerCase();
    const emailUser = email === undefined ? user?.email : email.toLowerCase();

    const update = await User.findOneAndUpdate(
      { _id },
      {
        name: nameUser,
        email: emailUser,
        avatarUrl: avatar,
        githubUrl: githubUrl ?? user?.githubUrl,
        linkedinUrl: linkedinUrl ?? user?.linkedinUrl,
      },
      {
        new: true,
      }
    );

    await update?.save();

    return update;
  } catch (e) {
    console.log(e);
    return { msg: "Oops! Ocurrio un error" };
  }
};
