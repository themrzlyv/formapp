import {Dispatch} from 'redux'
import {UserDispatchTypes, GET_USER_INFO, USER_FAIL, USER_LOGOUT} from './userActionTypes'
import { getData } from '../../helpers/fetchData'




export const getUser = () => async(dispatch: Dispatch<UserDispatchTypes>) => {
    const token = await getData(`/user/refresh_token`)
    if(token.error){
        return dispatch({type: USER_FAIL,payload: token.error})
    }
    const data = await getData(`/user/profile` ,token)
    if(data.error){
        return dispatch({type: USER_FAIL,payload: data.error})
    }else {
        dispatch({type: GET_USER_INFO,payload: data })
    }
}

export const logoutUser = () => async(dispatch: Dispatch<UserDispatchTypes>) => {
    const result = await getData(`/user/logout`)
    dispatch({type: USER_LOGOUT,payload: result})
}



