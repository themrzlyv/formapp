import React, { useState } from 'react'
import {useToasts} from 'react-toast-notifications'
import {useDispatch,useSelector} from 'react-redux'
import { createCategory } from '../../Global/Actions/categoryAction'
import { RootStore } from '../../Global/Store'
import EditCategory from './EditCategory'
import { CategoryDataType } from '../../Global/Actions/categoryActionTypes'


interface Iform {
    title: string ;
}


const Category = () => {
    const {addToast} = useToasts()
    const dispatch = useDispatch()
    const categories = useSelector((state:RootStore) => state.category.categories)

    const [isEdit, setisEdit] = useState<boolean>(false)
    const [currentCategory, setcurrentCategory] = useState<CategoryDataType>()
    const [form, setform] = useState<Iform>({title: ''})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setform({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        if(form.title.length === 0 )
            return addToast('Please fill all inputs', {appearance:'error',autoDismiss:true})
        dispatch(createCategory(form))
        addToast(`${form.title} category is created successfully`, {appearance:'success',autoDismiss:true})
    }
    
    return (
        <div className='container mt-3'>
            <div className="row shadow-m-1">
                <div className="col-lg-4">
                    <div className='py-2 my-1 '>
                        <h5 className='fw-bold m-0 fs-5 text-dark'>Create new category</h5>
                    </div>
                    <form 
                    onSubmit={handleSubmit} 
                    autoComplete='off'>
                        <div className="form-floating mb-3">
                            <input
                            name='title'
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Title"/>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="form-floating mb-3 d-flex">
                            <button
                            className='btn-teal p-2 d-flex align-items-center w-100 justify-content-center'>
                                <i className="fas fa-plus me-1"></i>
                                Create
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-8 ">
                    {
                        isEdit === false ?
                        (
                            <table className="table align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Config</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories && categories.map(category => (
                                            <tr key={category?._id}>
                                                <td>{category?._id}</td>
                                                <td>{category?.title}</td>
                                                <td>
                                                    <button 
                                                    onClick={() => {
                                                        setcurrentCategory(category)
                                                        setisEdit(!isEdit)
                                                    }}
                                                    className="btn btn-orange">
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                        : <EditCategory category={currentCategory} changeEditMode={setisEdit}/>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Category
