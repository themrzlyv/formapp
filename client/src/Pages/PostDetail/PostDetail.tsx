import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { getSinglePost } from '../../Global/Actions/postAction'
import { RootStore } from '../../Global/Store'
import AdminMode from './AdminMode'
import {ImBullhorn} from 'react-icons/im'
import {GiCardboardBox} from 'react-icons/gi'
import {BiMessageSquareMinus} from 'react-icons/bi'
import {RiEditCircleLine} from 'react-icons/ri'
interface Iprops extends RouteComponentProps<{id:string}> {
    
}




const PostDetail:React.FC<Iprops> = ({match}) => {
    const [isAdmin, setisAdmin] = useState(false)
    const dispatch = useDispatch()

    const post = useSelector((state:RootStore) => state.posts.post)
    const user = useSelector((state:RootStore) => state.user.user)


    useEffect(() => {
        dispatch(getSinglePost(match.params.id))
    },[post?.category])



    return (
        <div className='container  '>
            <div className="row">
                <div className="col-lg-8 bg-white shadow-m-7 my-3 mx-auto">
                    {
                        isAdmin === false ? 
                        (
                            <div className="card  my-3">
                                <img 
                                    className='card-img-top img-thumbnail'
                                    src={post?.image} alt=""/>
                                <div className='card-body'>
                                    <div
                                    className='d-flex border-bottom align-items-center justify-content-between py-1'>
                                    
                                        <h5 className="fs-5 fw-bold text-dark m-0 card-title ">
                                            <ImBullhorn fontSize={20} className="me-2" />
                                            {post?.title}
                                        </h5>
                                        {
                                            user && user?.role === true ?
                                            (
                                                <button
                                                onClick={() => setisAdmin(!isAdmin)}
                                                className='btn btn-yellow text-dark d-flex align-items-center'
                                                >
                                                    <RiEditCircleLine fontSize={20} className="me-2"/>
                                                    Edit
                                                </button>
                                            )
                                            : null
                                        }
                                    </div>
                                    <h5 className="fs-6 text-gray m-0 border-bottom py-1 my-2 card-text">
                                        <GiCardboardBox fontSize={20} className="me-2" />
                                        {post?.category}
                                    </h5>
                                    <p className="fs-6 text-dark fst-italic m-0 mb-2 card-text">
                                        <BiMessageSquareMinus fontSize={20} className="me-2" />
                                        {post?.description}
                                    </p>
                                </div>
                            </div>
                        ): <AdminMode changeEditMode={setisAdmin} currentPost={post}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default PostDetail
