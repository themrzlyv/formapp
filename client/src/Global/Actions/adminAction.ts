import { Dispatch } from 'redux';
import { deleteData, getData } from '../../helpers/fetchData';
import {AdminDispatchType,CHANGE_USER_ROLE,DELETE_USER,GET_ALL_USERS} from './adminActionTypes'


export const getAllUsers = () => async(dispatch:Dispatch<AdminDispatchType>) => {
    const token = await getData(`/user/refresh_token`)
    const result = await getData(`/admin/users`, token)
    dispatch({type: GET_ALL_USERS,payload:result})
}

export const changeUserRole = (id:string) => async(dispatch:Dispatch<AdminDispatchType>) => {
    const token = await getData(`/user/refresh_token`)
    const changed = await getData(`/admin/changeRole/${id}`, token)
    const result = await getData(`/admin/users`, token)
    dispatch({type: CHANGE_USER_ROLE,payload:result})
}

export const deleteUser = (id:string) => async(dispatch:Dispatch<AdminDispatchType>) => {
    const token = await getData(`/user/refresh_token`)
    const deleted = await deleteData(`/admin/delete/${id}`)
    const result = await getData(`/admin/users`, token)
    dispatch({type: DELETE_USER,payload:result})
}

