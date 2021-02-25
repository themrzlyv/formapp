export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
export const GET_SINGLE_CATEGORY = "GET_SINGLE_CATEGORY"


export type CategoryDataType = {
    _id: string,
    title: string
}



export interface GetAllCategories {
    type: typeof GET_ALL_CATEGORIES;
    payload: CategoryDataType []
}

export interface GetSingleCategory {
    type: typeof GET_SINGLE_CATEGORY;
    payload: CategoryDataType
}




// for admin access 
export const CREATE_CATEGORY = "CREATE_CATEGORY"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const DELETE_CATEGORY = "DELETE_CATEGORY"

export type CreateCategoryDataType = {
    title:string,
}
export type UpdateCategoryDataType = {
    title:string | undefined,
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


export type CategoryDispatchTypes = GetAllCategories | GetSingleCategory | CreateCategory | UpdateCategory | DeleteCategory