export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
export const GET_SINGLE_CATEGORY = "GET_SINGLE_CATEGORY"
export const GET_POSTS_FROM_SINGLE_CATEGORY = "GET_POSTS_FROM_SINGLE_CATEGORY"


export type CategoryDataType = {
    _id: string,
    name: string,
    about: string,
    posts: any []
}


export type SinglePostType = {
    _id: string,
    title: string,
    category: string,
    description: string
}

export interface GetAllCategories {
    type: typeof GET_ALL_CATEGORIES;
    payload: CategoryDataType []
}

export interface GetSingleCategory {
    type: typeof GET_SINGLE_CATEGORY;
    payload: CategoryDataType
}

export interface GetPostsFromSingleCategory {
    type: typeof GET_POSTS_FROM_SINGLE_CATEGORY;
    payload: SinglePostType []
}


// for admin access 
export const CREATE_CATEGORY = "CREATE_CATEGORY"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const DELETE_CATEGORY = "DELETE_CATEGORY"

export type CreateCategoryDataType = {
    name:string,
    about:string
}
export type UpdateCategoryDataType = {
    name:string | undefined,
    about:string | undefined
}

export interface CreateCategory {
    type: typeof CREATE_CATEGORY;
    payload: CategoryDataType []
}

export interface UpdateCategory {
    type: typeof UPDATE_CATEGORY;
    payload: CategoryDataType []
}

export interface DeleteCategory {
    type: typeof DELETE_CATEGORY;
    payload: CategoryDataType []
}


export type CategoryDispatchTypes = GetAllCategories | GetSingleCategory | GetPostsFromSingleCategory | CreateCategory | UpdateCategory | DeleteCategory