import { CategoryDataType, CategoryDispatchTypes, GET_ALL_CATEGORIES , GET_SINGLE_CATEGORY,GET_POSTS_FROM_SINGLE_CATEGORY, SinglePostType, CREATE_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY} from "../Actions/categoryActionTypes"

interface Istate {
    categories?: CategoryDataType [];
    category?: CategoryDataType;
    posts?: SinglePostType []

}

const initialState:Istate = {

}




export const categoryReducer = (state:Istate = initialState,action:CategoryDispatchTypes):Istate => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case GET_SINGLE_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case GET_POSTS_FROM_SINGLE_CATEGORY:
            return {
                ...state,
                posts: action.payload
            }
        case CREATE_CATEGORY:
            return {
                categories: action.payload
            }
        case UPDATE_CATEGORY:
            return {
                categories: action.payload
            }
        case DELETE_CATEGORY:
            return {
                categories: action.payload
            }
        default:
            return state
    }
}