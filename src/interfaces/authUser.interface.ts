export interface AuthLogin {
    email: string;
    password: string;
}

export interface AuthRegister extends AuthLogin {
    name: string;
}
