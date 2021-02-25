import { Dispatch } from 'redux';
import { getData } from '../../helpers/fetchData';
import { GET_ALL_POSTS, GET_SINGLE_POST, PostDispatchType } from './postActionTypes';

export const getAllPosts = () => async(dispatch:Dispatch<PostDispatchType>) => {
    const result = await getData(`/post`)
    dispatch({type: GET_ALL_POSTS,payload:result})
}

export const getSinglePost = (id:string) => async(dispatch:Dispatch<PostDispatchType>) => {
    const result = await getData(`/post/${id}`)
    dispatch({type: GET_SINGLE_POST,payload:result})
}