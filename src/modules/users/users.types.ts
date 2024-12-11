export type UserRegister = {
    name: string;
    lastName: string;
    email: string;
    password: string;
}

export type UserLogin = {
    email: string;
    password: string;
}

export type UserRefreshToken = {
    refreshToken: string;
}

export type UserForgotPassword = {
    email: string;
}

export type UserResetPassword = {
    resetToken: string;
    newPassword: string;
}

export type ServiceResponse<T> = {
    data?: T;
    success: boolean;
    error?: string;
}

export type LoginResponse = {
    token: string;
    refreshToken: string;
}
