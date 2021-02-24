import { UserDataType,UserError, UserDispatchTypes , GET_USER_INFO, USER_FAIL, USER_LOGOUT} from "../Actions/userActionTypes"

interface Istate {
    user?: UserDataType,
    error?: UserError
}

const initialState: Istate = {
    
}

export const userReducer = (state: Istate = initialState,action: UserDispatchTypes): Istate => {
    switch (action.type) {
        case GET_USER_INFO:
            const user = action.payload
            return {
                user
            }
        case USER_FAIL:
            return {
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                error: action.payload
            }
        default:
            return state
    }
}