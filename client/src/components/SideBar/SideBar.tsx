import React from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { RootStore } from '../../Global/Store'
import {FaBoxOpen} from 'react-icons/fa'
import {IoCallSharp} from 'react-icons/io5'
import {RiBuilding3Fill} from 'react-icons/ri'
import {MdSubdirectoryArrowRight} from 'react-icons/md'

const SideBar = () => {
    const categories = useSelector((state:RootStore) => state.category.categories)
    return (
        <div className='container shadow-m-4 rounded bg-white'>
            <div className="row">
                <div className="col-lg-12">
                    <ul className=" p-0  mt-4 mb-2">
                        <li className="my-2 py-1 border-bottom bg-transparent">
                            <NavLink to='/posts' className='text-dark fs-5  d-flex align-items-center'>
                                <FaBoxOpen fontSize={21} className="mx-2"/>
                                Explore
                            </NavLink>
                        </li>
                        <li className="mb-2 py-1 bg-transparent border-bottom">
                            <NavLink to='/posts' className='text-dark fs-5  d-flex align-items-center'>
                                <IoCallSharp fontSize={21} className="mx-2" />
                                Contact
                            </NavLink>
                        </li>
                        <li className="mb-2 py-1 bg-transparent border-bottom">
                            <NavLink to='/posts' className='text-dark fs-5 d-flex align-items-center'>
                                <RiBuilding3Fill fontSize={21} className="mx-2" />
                                Company
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 my-1">
                    <button 
                    disabled
                    className="btn-yellow rounded text-dark fs-6 ">
                        All Tags
                    </button>
                    <ul
                    className="my-2 p-0">
                        {
                            categories && categories.map(category => (
                                <li 
                                key={category._id}
                                className=" bg-transparent py-2 border-bottom d-flex align-items-center">
                                    <NavLink 
                                    to={`/category/${category._id}`} 
                                    className='text-dark d-flex align-items-center'>
                                        <MdSubdirectoryArrowRight fontSize={21} className="me-1" />
                                        {category.title}
                                    </NavLink>
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
