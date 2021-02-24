      // User operation actions

export const GET_ALL_USERS = "GET_ALL_USERS"
export const CHANGE_USER_ROLE = "CHANGE_USER_ROLE"
export const DELETE_USER = "DELETE_USER"

export type SingleUserDataType = {
    _id: string,
    name: string,
    email: string,
    role: boolean,
    github_username:string,
    github:string,
    about:string
}

export interface GetAllUsers {
    type: typeof GET_ALL_USERS;
    payload: SingleUserDataType []
}

export interface ChangeUserRole {
    type: typeof CHANGE_USER_ROLE;
    payload: SingleUserDataType []
}

export interface DeleteUser {
    type: typeof DELETE_USER;
    payload: SingleUserDataType []
}

export type AdminDispatchType = GetAllUsers | ChangeUserRole | DeleteUser