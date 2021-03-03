import React from 'react'
import { NavLink } from 'react-router-dom'
import { PostDataType } from '../../Global/Actions/postActionTypes'
import {ImBullhorn} from 'react-icons/im'
import {GiCardboardBox} from 'react-icons/gi'
import {BiMessageSquareMinus} from 'react-icons/bi'
import {IoArrowRedoOutline} from 'react-icons/io5'


interface Iprops {
    item: PostDataType;
    width?: string;
}



const Post:React.FC<Iprops> = ({item, width}) => {
    return (
        <div className={`col-lg-${width ? width : '5'} post-card mx-auto shadow-m-6 bg-white rounded  my-2 p-0 `}>
            <div className='card'>
                <div className='row g-0'>
                    <div className="col-md-4 d-flex align-items-center p-1">
                        <img src={item.image} className='img-thumbnail img-fluid' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="fs-5 card-title fw-bold text-dark m-0 border-bottom py-1">
                                <ImBullhorn fontSize={20} className="me-2" />
                                {item.title}
                            </h5>
                            <h5 className="fs-6 card-text text-gray m-0 border-bottom py-1 my-2">
                                <GiCardboardBox fontSize={20} className="me-2" />
                                {item.category}
                            </h5>
                            <p className="fs-6 card-text text-dark fst-italic m-0 mb-2">
                                <BiMessageSquareMinus fontSize={20} className="me-2" />
                                {item.description}
                            </p>
                            <NavLink
                            to={`/post/${item._id}`}
                            className="btn btn-success shadow-m-4 w-50 rounded">
                                <IoArrowRedoOutline fontSize={20} className="me-1" />
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

