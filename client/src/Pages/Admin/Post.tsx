import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { createPost } from '../../Global/Actions/postAction'
import { RootStore } from '../../Global/Store'
import { useRouter } from '../../hooks/useRouter'



interface Iform {
    title: string ;
    category: string  ;
    description: string ;
    image: string ;
}

const Post = () => {
    const {addToast} = useToasts()
    const router = useRouter()
    const dispatch = useDispatch()
    const categories = useSelector((state:RootStore) => state.category.categories)
    const posts = useSelector((state:RootStore) => state.posts.posts)

    const [form, setform] = useState<Iform>({title: '', category: '', description: '', image: ''})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>):void => {
        setform({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        if(form.title.length === 0 ||form.category.length === 0 || form.description.length === 0 || form.image.length === 0)
            return addToast('Please fill all inputs', {appearance:'error',autoDismiss:true})
        dispatch(createPost(form))
        addToast(`${form.title} post is created successfully`, {appearance:'success',autoDismiss:true})
    }

    return (
        <div className='container mt-3'>
            <div className="row shadow-m-1">
                <div className="col-lg-4">
                    <div className='py-2 my-1 '>
                        <h5 className='fw-bold m-0 fs-5 text-dark'>Create new Post</h5>
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
                                        {item.title}
                                    </option>
                                    ))
                                }
                            </select>
                            <label htmlFor="category">Category</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            name='description'
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="description"
                            placeholder="Description"/>
                            <label htmlFor="descripiton">Description</label>
                        </div>
                        <div className="form-floating mb-3 d-flex">
                            <button
                            type='submit'
                            className='btn-teal p-2 d-flex align-items-center w-100 justify-content-center'>
                                <i className="fas fa-plus me-1"></i>
                                Create
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-8 ">
                    <table className="table align-middle">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Config</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts && posts.map(post => (
                                    <tr key={post._id}>
                                        <td>{post._id}</td>
                                        <td>{post.title}</td>
                                        <td>
                                            <NavLink to={`/post/${post._id}`} 
                                            className="btn btn-orange">
                                                Edit
                                            </NavLink>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Post
