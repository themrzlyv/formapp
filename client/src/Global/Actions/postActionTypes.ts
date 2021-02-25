export const GET_ALL_POSTS = "GET_ALL_POSTS"
export const GET_SINGLE_POST = "GET_SINGLE_POST"


export type PostDataType = {
    _id: string,
    title: string,
    category: string,
    description: string
}

export interface GetAllPosts {
    type: typeof GET_ALL_POSTS;
    payload: PostDataType [];
}

export interface GetSinglePost {
    type: typeof GET_SINGLE_POST;
    payload: PostDataType ;
}

export type PostDispatchType = GetAllPosts | GetSinglePost