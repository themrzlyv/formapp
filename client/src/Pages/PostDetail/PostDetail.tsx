import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { CategoryDataType } from '../../Global/Actions/categoryActionTypes'
import { getSinglePost } from '../../Global/Actions/postAction'
import { RootStore } from '../../Global/Store'
import { getData } from '../../helpers/fetchData'
import AdminMode from './AdminMode'

interface Iprops extends RouteComponentProps<{id:string}> {
    
}




const PostDetail:React.FC<Iprops> = ({match}) => {
    const [isAdmin, setisAdmin] = useState(false)
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



    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 shadow-m-7 mx-auto">
                    {
                        isAdmin === false ? 
                        (
                            <div className=" my-3">
                                <div 
                                className='d-flex border-bottom align-items-center justify-content-between py-1'>
                                    <h5 className="fs-5 fw-bold text-dark m-0  ">
                                        <i className="fas fa-bullhorn me-1 fs-6"></i>
                                        {post?.title}
                                    </h5>
                                    {
                                        user && user?.role === true ? 
                                        (
                                            <button
                                            onClick={() => setisAdmin(!isAdmin)}
                                            className='btn btn-orange'
                                            >
                                                Edit
                                            </button>
                                        )
                                        : null
                                    }
                                </div>
                                <h5 className="fs-6 text-gray m-0 border-bottom py-1 my-2">
                                    <i className="fas fa-box-open me-1 text-dark fs-6"></i>
                                    {category?.title}
                                </h5>
                                <p className="fs-6 text-dark fst-italic m-0 mb-2">
                                    <i className="far fa-comment-alt me-2 fs-6"></i>
                                    {post?.description}
                                </p>
                            </div>
                        ): <AdminMode changeEditMode={setisAdmin} currentPost={post} currentCategory={category}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default PostDetail
