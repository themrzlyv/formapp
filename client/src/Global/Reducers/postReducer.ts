import { CREATE_POST, DELETE_POST, GET_ALL_POSTS, GET_SINGLE_POST, PostDataType, PostDispatchType, UPDATE_POST } from "../Actions/postActionTypes";

interface Istate {
    posts?:PostDataType [];
    post?: PostDataType
}


const initialState:Istate = {

}

export const postReducer = (state:Istate = initialState,action:PostDispatchType):Istate => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                posts:action.payload
            }
        case GET_SINGLE_POST:
            return {
                ...state,
                post:action.payload
            }
        case UPDATE_POST:
            return {
                ...state,
                post:action.payload
            }
        case DELETE_POST:
            return {
                posts:action.payload
            }
        case CREATE_POST:
            return {
                posts:action.payload
            }
        default:
            return state
    }
}