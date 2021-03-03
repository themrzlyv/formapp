import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { getAllPosts } from '../../Global/Actions/postAction'
import { RootStore } from '../../Global/Store'
import Post from '../Post/Post'



const Main = () => {
    const [sort, setsort] = useState<string>('')
    const dispatch = useDispatch()
    const posts = useSelector((state:RootStore) => state.posts.posts)

    
    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setsort(event.target.value)
        dispatch(getAllPosts(event.target.value))
    }
    

    return (
        <div className='container shadow-m-4 bg-white'>
            <div className="row">
                <div className="col-lg-8">
                    <h4 className="h5">Hey guys, Welcome to my Form</h4>
                </div>
                <div className="col-lg-4">
                    <select value={sort} onChange={(event) => handleChange(event)}>
                        <option value=''>Newest Topics</option>
                        <option value='oldest'>Oldest Topics</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="container">
                        <div className="row">
                            {
                                posts && posts.map(post => <Post width="12" key={post._id} item={post}/>)
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Main

