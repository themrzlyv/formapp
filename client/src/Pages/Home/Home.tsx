import React from 'react'
import Main from '../../components/Main/Main'
import SideBar from '../../components/SideBar/SideBar'

const Home = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4">
                    <SideBar />
                </div>
                <div className="col-lg-8">
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default Home
