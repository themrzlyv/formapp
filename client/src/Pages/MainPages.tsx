import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Account from './Account/Account'
import Admin from './Admin/Admin'
import Post from './Admin/Post'
import User from './Admin/User'

import Category from './Category/Category'
import Home from './Home/Home'
import Login from './Login/Login'
import NotFound from './NotFound/NotFound'
import Register from './Register/Register'

const MainPages = () => {
    return (
        <Switch>
            <Route path='/account' component={Account}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/category/:id' component={Category}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            {/* <Route path='/post/:id' component={PostDetail}/> */}
            <Route path='/' exact component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default MainPages
