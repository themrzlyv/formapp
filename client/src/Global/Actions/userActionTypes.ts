export const GET_USER_INFO = 'GET_USER_INFO'
export const USER_FAIL = 'USER_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'

export type UserDataType = {
    role: boolean,
    about:  string,
    github_username: string,
    github: string,
    name: string,
    email: string,
    password: string ,
    createdAt: number;
}

export type UserError = {
    error: string 
}


export interface UserLogout {
    type: typeof USER_LOGOUT;
    payload: UserError
}

export interface UserFail {
    type: typeof USER_FAIL,
    payload: UserError
}

export interface GetUserInfo {
    type: typeof GET_USER_INFO,
    payload: UserDataType 
}

export type UserDispatchTypes = GetUserInfo | UserFail | UserLogout