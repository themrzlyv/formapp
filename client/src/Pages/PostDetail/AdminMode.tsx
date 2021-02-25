import React, { useState } from 'react'
import {useRouter} from '../../hooks/useRouter'
import {useDispatch,useSelector} from 'react-redux'
import { CategoryDataType } from '../../Global/Actions/categoryActionTypes'
import { deletePost, updatePost } from '../../Global/Actions/postAction'
import { PostDataType } from '../../Global/Actions/postActionTypes'
import { RootStore } from '../../Global/Store'



interface Iform {
    title: string | undefined;
    category: string | undefined ;
    description: string | undefined;
}

interface Iprops {
    currentPost: PostDataType | undefined;
    currentCategory: CategoryDataType | undefined;
    changeEditMode: React.Dispatch<React.SetStateAction<boolean>>
}


const AdminMode:React.FC<Iprops> = ({currentPost, currentCategory, changeEditMode}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const categories = useSelector((state:RootStore) => state.category.categories)

    const [form, setform] = useState<Iform>({title: currentPost?.title, category: currentCategory?._id, description: currentPost?.description})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>):void => {
        setform({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        dispatch(updatePost(currentPost?._id,form))
        changeEditMode(false)
        router.push(`/post/${currentPost?._id}`)
    }

    const handleDelete = () => {
        dispatch(deletePost(currentPost?._id))
        router.push(`/posts`)
    }
    
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 my-3">
                    <form 
                    onSubmit={handleSubmit}
                    autoComplete='off'>
                        <div className="form-floating mb-3">
                            <input
                            name='title'
                            value={form.title}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Title"/>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select 
                            name='category' 
                            onChange={handleChange} 
                            className="form-select" 
                            id="category">
                                {
                                    categories && categories.map(item => (
                                    <option 
                                    value={item._id} 
                                    key={item._id}>
                                        {item.name}
                                    </option>
                                    ))
                                }
                            </select>
                            <label htmlFor="category">Category</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            name='description'
                            value={form.description}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="description"
                            placeholder="Description"/>
                            <label htmlFor="descripiton">Description</label>
                        </div>
                        <div className="form-floating mb-3 d-flex">
                            <button 
                            onClick={() => changeEditMode(false)}
                            className="btn btn-white" 
                            data-bs-dismiss="modal">
                                <i className="far fa-arrow-alt-circle-left "></i>
                                Back
                            </button>
                            <button 
                            onClick={handleDelete}
                            type="button" 
                            className="btn btn-red mx-2">
                                <i className="fas fa-trash mx-2"></i>
                                Remove
                            </button>
                            <button type="submit" className="btn btn-orange">
                                <i className="far fa-check-circle "></i>
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminMode
