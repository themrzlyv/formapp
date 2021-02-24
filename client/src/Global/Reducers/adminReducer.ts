import { AdminDispatchType, CHANGE_USER_ROLE, DELETE_USER, GET_ALL_USERS, SingleUserDataType } from "../Actions/adminActionTypes";



interface Istate {
    users?: SingleUserDataType [];
}

const initialState:Istate = {

}


export const adminReducer = (state:Istate = initialState,action:AdminDispatchType):Istate => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                users: action.payload
            }
        case CHANGE_USER_ROLE:
            return {
                users: action.payload
            }
        case DELETE_USER:
            return {
                users: action.payload
            }
        default:
            return state
    }
}