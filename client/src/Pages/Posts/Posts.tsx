import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Post from '../../components/Post/Post'
import { getAllPosts } from '../../Global/Actions/postAction'
import { RootStore } from '../../Global/Store'

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state:RootStore) => state.posts.posts)

    useEffect(() => {
        dispatch(getAllPosts())
    },[])

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
