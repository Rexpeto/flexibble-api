import { compare, hash } from "bcrypt";

export const encrypt = async (password: string) => {
    const passwordHash = hash(password, 10);
    return passwordHash;
};

export const verified = async (password: string, passwordHash: string) => {
    const isCorrect = await compare(password, passwordHash);
    return isCorrect;
};
