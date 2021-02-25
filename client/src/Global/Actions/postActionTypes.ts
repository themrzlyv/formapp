export const GET_ALL_POSTS = "GET_ALL_POSTS"
export const GET_SINGLE_POST = "GET_SINGLE_POST"
export const UPDATE_POST = "UPDATE_POST"
export const DELETE_POST = "DELETE_POST"
export const CREATE_POST = "CREATE_POST"

export type PostDataType = {
    _id: string,
    title: string,
    category: string,
    description: string,
    image: string
}

export type UpdatePostDataType = {
    title: string | undefined,
    category: string | undefined,
    description: string | undefined,
    image: string | undefined
}

export type CreatePostDataType = {
    title: string ,
    category: string ,
    description: string,
    image: string
}

export interface GetAllPosts {
    type: typeof GET_ALL_POSTS;
    payload: PostDataType [];
}

export interface GetSinglePost {
    type: typeof GET_SINGLE_POST;
    payload: PostDataType ;
}

export interface UpdatePost {
    type: typeof UPDATE_POST;
    payload: PostDataType ;
}
export interface DeletePost {
    type: typeof DELETE_POST;
    payload: PostDataType [];
}

export interface CreatePost {
    type: typeof CREATE_POST;
    payload: PostDataType [];
}

export type PostDispatchType = GetAllPosts | GetSinglePost | UpdatePost | DeletePost | CreatePost