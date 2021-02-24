import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import Post from '../../components/Post/Post'
import { getPostsFromSingleCategory, getSingleCategory } from '../../Global/Actions/categoryAction'
import { RootStore } from '../../Global/Store'

interface Iparams {
    id:string
}

const Category = () => {
    const dispatch = useDispatch()
    const params = useParams<Iparams>()
    const {id} = params
    const categoryinfo = useSelector((state:RootStore) => state.category.category)
    const posts = useSelector((state:RootStore) => state.category.posts)
    
    useEffect(() => {
        dispatch(getSingleCategory(id))
        dispatch(getPostsFromSingleCategory(id))
    }, [id])


    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8 shadow-m-3">
                    <div className="container">
                        <div className="row">
                            {
                                posts && posts?.map(post => (<Post key={post?._id} item={post}/>))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 shadow-m-3">
                    <div className="container my-3">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="h4 d-flex align-items-center justify-content-between py-1 text-primary border-bottom text-end fw-bold fs-5 text-capitalize">
                                    <span className="badge bg-secondary">
                                        {categoryinfo && categoryinfo?.posts.length}
                                    </span>
                                    {categoryinfo && categoryinfo?.name}
                                </h4>
                                <p className="py-1 text-secondary border-bottom text-end fs-6 ">
                                    {categoryinfo && categoryinfo?.about}
                                    <i className="fas fa-long-arrow-alt-left ms-1"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
