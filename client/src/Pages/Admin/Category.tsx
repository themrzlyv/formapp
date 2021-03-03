import React, { useState } from 'react'
import {Formik , Form, FormikHelpers} from 'formik'
import * as Yup from 'yup'
import {useToasts} from 'react-toast-notifications'
import {useDispatch,useSelector} from 'react-redux'
import { createCategory } from '../../Global/Actions/categoryAction'
import { RootStore } from '../../Global/Store'
import EditCategory from './EditCategory'
import { CategoryDataType } from '../../Global/Actions/categoryActionTypes'
import TextField from '../../components/TextField/TextField'


interface Iform {
    title: string ;
}


const Category = () => {
    const {addToast} = useToasts()
    const dispatch = useDispatch()
    const categories = useSelector((state:RootStore) => state.category.categories)

    const [isEdit, setisEdit] = useState<boolean>(false)
    const [currentCategory, setcurrentCategory] = useState<CategoryDataType>()

    const validationSchema = Yup.object({
        title: Yup.string()
        .max(15,'Title must be max 15 character')
        .required('Title is required')
    })

    const handleSubmit = (values:Iform,onSubmitProps:FormikHelpers<Iform>):void => {
        dispatch(createCategory(values))
        addToast(`${values.title} category is created successfully`, {appearance:'success',autoDismiss:true})
        onSubmitProps.resetForm()
    }
    
    return (
        <div className='container mt-3'>
            <div className="row shadow-m-1">
                <div className="col-lg-4 bg-white my-2 rounded shadow-m-4">
                    <div className='py-2 my-1 '>
                        <h5 className='fw-bold m-0 fs-5 text-dark'>Create new category</h5>
                    </div>
                    <Formik
                    initialValues={{
                        title: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values , onSubmitProps) => handleSubmit(values,onSubmitProps)}
                    
                    >
                        {formik => (
                            <Form>
                                <TextField label="Title" name="title" type="text"/>
                                <button type="submit" className="btn bg-teal my-2 text-white">Add</button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="col-lg-8 bg-white my-2 rounded shadow-m-4">
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
                                                    className="btn bg-orange text-white shadow-m-9">
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
