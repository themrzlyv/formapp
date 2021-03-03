import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { NavLink,Switch, Route} from 'react-router-dom'
import { RootStore } from '../../Global/Store'
import Category from './Category'
import Post from './Post'
import User from './User'

const Admin = () => {
    const user = useSelector((state:RootStore) => state.user.user)
    return (
        <div className='container'>
            <div className="row shadow-m-4">
                <div className="col-lg-12 bg-white py-2 px-0 d-flex align-items-center ">
                    <div className=' d-flex ms-3 border-dark w-50 align-items-center'>
                        <span className="badge bg-primary py-2 fs-6">Admin Access</span>
                        <i className="fas fa-arrows-alt-h mx-2"></i>
                        <span className="badge bg-yellow text-dark py-2 fs-6">{user?.email}</span>
                    </div>
                </div>
            </div>
            <div className="row  mt-3">
                <div className="col-lg-12 d-flex justify-content-start bg-dark shadow-m-7 rounded">
                    <NavLink to='/admin/user' className='btn   '>
                        User Operations
                    </NavLink>
                    <NavLink to='/admin/post' className='btn   '>
                        Post Operations
                    </NavLink>
                    <NavLink to='/admin/category' className='btn '>
                        Category Operations
                    </NavLink>
                </div>
            </div>
            <div className="row">
                <Switch>
                    <Route path='/admin/user' component={User}/>
                    <Route path='/admin/category' component={Category}/>
                    <Route path='/admin/post' component={Post}/>
                </Switch>
            </div>
        </div>
    )
}

export default Admin
