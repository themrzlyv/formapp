import React from 'react'
import { SinglePostType } from '../../Global/Actions/categoryActionTypes'

interface Iprops {
    item: SinglePostType
}



const Post:React.FC<Iprops> = ({item}) => {
    return (
        <div className='col-lg-4  post my-3 p-0 '>
            <h5 className="h5 fs-5 fw-bold text-success text-center m-3">{item.title}</h5>
            <p className="h6 fs-6 text-secondary text-center m-3">{item.description}</p>
        </div>
    )
}

export default Post

