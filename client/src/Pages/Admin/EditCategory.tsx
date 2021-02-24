import React, {  useState } from 'react'
import {useDispatch} from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import {  deleteCategory, updateCategory } from '../../Global/Actions/categoryAction'
import { CategoryDataType } from '../../Global/Actions/categoryActionTypes'

import {useRouter} from '../../hooks/useRouter'


interface Iform {
    name: string | undefined;
    about: string | undefined;
}

interface Iprops {
    category:CategoryDataType | undefined;
    changeEditMode:React.Dispatch<React.SetStateAction<boolean>>;
}

const EditCategory:React.FC<Iprops> = ({category , changeEditMode}) => {
    const router = useRouter()
    const {addToast} = useToasts()
    const dispatch = useDispatch()
    const [form, setform] = useState<Iform>({name: category?.name, about: category?.about})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setform({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        if(form.name?.length === 0 || form.about?.length === 0)
            return addToast('Please fill all inputs', {appearance:'error',autoDismiss:true})
        dispatch(updateCategory(category?._id,form))
        changeEditMode(false)
        addToast('Category is changed', {appearance:'success',autoDismiss:true})
        router.push('/admin/category')
    }


    const handleDelete = (event:React.MouseEvent<HTMLButtonElement>):void => {
        event.preventDefault()
        dispatch(deleteCategory(category?._id))
        changeEditMode(false)
        addToast('Category is deleted', {appearance:'success',autoDismiss:true})
        router.push('/admin/category')
    }

    return (
        <div className='col-lg-6 mx-auto'>
            <form 
            onSubmit={handleSubmit} 
            autoComplete='off'>
                <div className="form-floating mb-3">
                    <input
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                    name='about'
                    value={form.about}
                    onChange={handleChange}
                    type="about"
                    className="form-control"
                    id="about"
                    placeholder="About"/>
                    <label htmlFor="about">About</label>
                </div>
                <div className="form-floating mb-3 d-flex">
                    <button
                    onClick={() => changeEditMode(false)}
                    className='btn-white p-2 d-flex align-items-center me-1'>
                        <i className="far fa-arrow-alt-circle-left "></i>
                        Back
                    </button>
                    <button
                    onClick={handleDelete}
                    className='btn-red p-2 d-flex align-items-center ms-1'>
                        <i className="fas fa-trash mx-2"></i>
                        Delete
                    </button>
                    <button
                    className='btn-teal p-2 d-flex align-items-center ms-1'>
                        <i className="far fa-check-circle "></i>
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditCategory
