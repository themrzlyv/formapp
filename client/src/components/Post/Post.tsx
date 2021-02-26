import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { PostDataType } from '../../Global/Actions/postActionTypes'
import { getData } from '../../helpers/fetchData'

interface Iprops {
    item: PostDataType
}



const Post:React.FC<Iprops> = ({item}) => {
    const dispatch = useDispatch()

    
    return (
        <div className='col-lg-5 post-card mx-auto shadow-m-1  my-2 p-0 '>
            <div className='card'>
                <div className='row g-0'>
                    <div className="col-md-4 d-flex align-items-center p-1">
                        <img src={item.image} className='img-thumbnail img-fluid' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="fs-5 card-title fw-bold text-dark m-0 border-bottom py-1">
                                <i className="fas fa-bullhorn me-1 fs-6"></i>
                                {item.title}
                            </h5>
                            <h5 className="fs-6 card-text text-gray m-0 border-bottom py-1 my-2">
                                <i className="fas fa-box-open me-1 text-dark fs-6"></i>
                                {item.category}
                            </h5>
                            <p className="fs-6 card-text text-dark fst-italic m-0 mb-2">
                                <i className="far fa-comment-alt me-2 fs-6"></i>
                                {item.description}
                            </p>
                            <NavLink
                            to={`/post/${item._id}`}
                            className="btn btn-yellow shadow-m-4 text-dark w-50 rounded">
                                <i className="fas fa-book-reader me-1"></i>
                                Read More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post

