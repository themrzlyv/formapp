import { Dispatch } from 'redux';
import { deleteData, getData, postData, putData } from '../../helpers/fetchData';
import { CreatePostDataType, CREATE_POST, DELETE_POST, GET_ALL_POSTS, GET_POSTS_FOR_CATEGORY, GET_SINGLE_POST, PostDispatchType, UpdatePostDataType, UPDATE_POST } from './postActionTypes';

export const getAllPosts = (sort?:string,page?:number) => async(dispatch:Dispatch<PostDispatchType>) => {
    let url = `/post`
    if(sort || page)  url += `?page=${page}&sort=${sort}`

    const result = await getData(url)
    dispatch({type: GET_ALL_POSTS,payload:result})
}

export const getSinglePost = (id:string) => async(dispatch:Dispatch<PostDispatchType>) => {
    const result = await getData(`/post/${id}`)
    dispatch({type: GET_SINGLE_POST,payload:result})
}

export const getPostsForCategory = (category:string | undefined) => async(dispatch:Dispatch<PostDispatchType>) => {
    const result = await getData(`/post?category=${category}`)
    dispatch({type: GET_POSTS_FOR_CATEGORY,payload:result})
}

export const updatePost = (id:string | undefined, data: UpdatePostDataType) => async(dispatch:Dispatch<PostDispatchType>) => {
    const updated = await putData(`/post/${id}`, data)
    const result = await getData(`/post/${id}`)
    dispatch({type: UPDATE_POST,payload:result})
}

export const deletePost = (id:string | undefined) => async(dispatch:Dispatch<PostDispatchType>) => {
    const deleted = await deleteData(`/post/${id}`)
    const result = await getData(`/post`)
    dispatch({type: DELETE_POST,payload: result})
}

export const createPost = (data:CreatePostDataType) => async(dispatch:Dispatch<PostDispatchType>) => {
    const created = await postData(`/post/` , data)
    const result = await getData(`/post`)
    dispatch({type: CREATE_POST,payload: result})
}