import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { RootStore } from '../../Global/Store'

const SideBar = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state:RootStore) => state.category.categories)
    return (
        <div className='container shadow-m-3'>
            <div className="row">
                <div className="col-lg-12">
                    <ul className=" p-0  mt-4 mb-2">
                        <li className="my-2 py-1 border-bottom bg-transparent">
                            <NavLink to='/posts' className='text-dark fs-5 fw-bold d-flex align-items-center'>
                                <i className="fas fa-archive me-2"></i>
                                All Posts
                            </NavLink>
                        </li>
                        <li className="mb-2 py-1 bg-transparent border-bottom">
                            <NavLink to='/posts' className='text-dark fs-5 fw-bold d-flex align-items-center'>
                                <i className="fas fa-phone-square-alt me-2"></i>
                                Contact
                            </NavLink>
                        </li>
                        <li className="mb-2 py-1 bg-transparent border-bottom">
                            <NavLink to='/posts' className='text-dark fs-5 fw-bold d-flex align-items-center'>
                                <i className="far fa-building me-2"></i>
                                Company
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 my-1">
                    <button 
                    className="btn btn-purple dropdown-toggle my-2" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#sideBarMenu" 
                    aria-expanded="false" 
                    aria-controls="sideBarMenu">
                        <i className="fas fa-share me-1"></i>
                        Categories
                    </button>
                    <ul
                    id="sideBarMenu"
                    className="collapse my-2">
                        {
                            categories && categories.map(category => (
                                <li 
                                key={category._id}
                                className=" py-1 bg-transparent border-bottom d-flex align-items-center justify-content-between">
                                    <NavLink 
                                    to={`/category/${category._id}`} 
                                    className='text-dark d-flex align-items-center'>
                                        <i className="fas fa-angle-right me-1"></i>
                                        {category.name}
                                    </NavLink>
                                    <span className="badge bg-red">
                                        {category.posts.length} article
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar
