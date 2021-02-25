import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Post from '../../components/Post/Post'
import { RootStore } from '../../Global/Store'

const Posts = () => {
    const posts = useSelector((state:RootStore) => state.posts.posts)

    return (
        <div className='container'>
            <div className="row p-0">
                {
                    posts && posts.map(post => <Post key={post._id} item={post}/>)
                }
            </div>
        </div>
    )
}

export default Posts
