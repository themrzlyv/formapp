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

    const handleChangePage = (event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        dispatch(getAllPosts('',1))
    }

    return (
        <div className='container'>
            <div className="row p-0">
                {
                    posts && posts.map(post => <Post key={post._id} item={post}/>)
                }
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a 
                                onClick={handleChangePage}
                                className="page-link text-black" 
                                >Load More</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Posts
