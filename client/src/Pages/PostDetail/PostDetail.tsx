import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { CategoryDataType } from '../../Global/Actions/categoryActionTypes'
import { getSinglePost } from '../../Global/Actions/postAction'
import { RootStore } from '../../Global/Store'
import { getData } from '../../helpers/fetchData'

interface Iprops extends RouteComponentProps<{id:string}> {
    
}


interface Iform {
    title: string | undefined;
    category: string | undefined;
    description: string | undefined;
}


const PostDetail:React.FC<Iprops> = ({match}) => {
    const [category, setcategory] = useState<CategoryDataType>()
    const dispatch = useDispatch()

    const post = useSelector((state:RootStore) => state.posts.post)
    const user = useSelector((state:RootStore) => state.user.user)

    const getCategory = async () => {
        const result = await getData(`/category/${post?.category}`)
        setcategory(result)
    }

    useEffect(() => {
        dispatch(getSinglePost(match.params.id))
        getCategory()
    },[post?.category])


    const [form, setform] = useState<Iform>({title: post?.title, category: category?.name, description: post?.description})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setform({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const adminLinks = ():JSX.Element => {
        return(
            <>
                <button type="button" className=" fw-bold btn-yellow text-dark " data-bs-toggle="modal" data-bs-target="#editPost">
                    <i className="fas fa-pen me-1"></i>
                    Edit
                </button>

                <div className="modal fade" id="editPost" tabIndex={-1} aria-labelledby="editPostLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form autoComplete='off'>
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
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button 
                                type="button" 
                                className="btn btn-white" 
                                data-bs-dismiss="modal">
                                    <i className="far fa-arrow-alt-circle-left "></i>
                                    Back
                                </button>
                                <button type="button" className="btn btn-red">
                                    <i className="fas fa-trash mx-2"></i>
                                    Remove
                                </button>
                                <button type="button" className="btn btn-orange">
                                    <i className="far fa-check-circle "></i>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 shadow-m-7 mx-auto">
                    <div className=" my-3">
                        <div 
                        className='d-flex border-bottom align-items-center justify-content-between py-1'>
                            <h5 className="fs-5 fw-bold text-dark m-0  ">
                                <i className="fas fa-bullhorn me-1 fs-6"></i>
                                {post?.title}
                            </h5>
                            {
                                user && user?.role === true ? adminLinks() : null
                            }
                        </div>
                        <h5 className="fs-6 text-gray m-0 border-bottom py-1 my-2">
                            <i className="fas fa-box-open me-1 text-dark fs-6"></i>
                            {category?.name}
                        </h5>
                        <p className="fs-6 text-dark fst-italic m-0 mb-2">
                            <i className="far fa-comment-alt me-2 fs-6"></i>
                            {post?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetail
