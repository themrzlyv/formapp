import { Dispatch } from 'redux';
import { deleteData, getData, postData, putData} from '../../helpers/fetchData';
import {CategoryDispatchTypes, GET_ALL_CATEGORIES,GET_SINGLE_CATEGORY, CREATE_CATEGORY, CreateCategoryDataType, UPDATE_CATEGORY, UpdateCategoryDataType, DELETE_CATEGORY} from './categoryActionTypes'


export const  getAllCategories = () => async(dispatch:Dispatch<CategoryDispatchTypes>) => {
    const data = await getData(`/category`)
    dispatch({type: GET_ALL_CATEGORIES,payload: data})
}


export const getSingleCategory = (id:string) => async(dispatch:Dispatch<CategoryDispatchTypes>) => {
    const token = await getData(`/user/refresh_token`)
    const data = await getData(`/category/${id}` , token)
    dispatch({type: GET_SINGLE_CATEGORY,payload: data})
}



export const createCategory = (data:CreateCategoryDataType) => async (dispatch:Dispatch<CategoryDispatchTypes>) => {
    const result_post = await postData(`/category/`, data)
    const result = await getData(`/category`)
    dispatch({type: CREATE_CATEGORY,payload: result})
}

export const updateCategory = (id:string | undefined,data:UpdateCategoryDataType) => async (dispatch:Dispatch<CategoryDispatchTypes>) => {
    const result_put = await putData(`/category/${id}`, data)
    const result = await getData(`/category`)
    dispatch({type: UPDATE_CATEGORY,payload: result})
}

export const deleteCategory = (id:string | undefined) => async (dispatch:Dispatch<CategoryDispatchTypes>) => {
    const result_put = await deleteData(`/category/${id}`)
    const result = await getData(`/category`)
    dispatch({type: DELETE_CATEGORY,payload: result})
}




