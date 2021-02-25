import { GET_ALL_POSTS, GET_SINGLE_POST, PostDataType, PostDispatchType } from "../Actions/postActionTypes";

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
                ...state,
                posts:action.payload
            }
        case GET_SINGLE_POST:
            return {
                ...state,
                post:action.payload
            }
        default:
            return state
    }
}