import { sign, verify } from "jsonwebtoken";

/*
 * jwt secret of environment
 * default: tokenBeautiful
 * @returns
 * */
const JWT_SECRET = process.env.JWT_SECRET ?? "tokenBeautiful";

/*
 * Create jwt of user session
 * @return jwt
 * */
export const signToken = (
    id: string | undefined,
    name: string,
    email: string
) => {
    const jwt = sign({ id, name, email }, JWT_SECRET, {
        expiresIn: "2h"
    });

    return jwt;
};

export const verifyToken = (token: string) => {
    const isOk = verify(token, JWT_SECRET);
    return isOk;
};
