import React,{useState} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import EditAccount from '../../components/EditAccount/EditAccount'
import { RootStore } from '../../Global/Store'
import {AiFillGithub} from 'react-icons/ai'

const Account = () => {
    const [isEdit, setisEdit] = useState<boolean>(false)

    const dispatch = useDispatch()

    const user = useSelector((state: RootStore) => state.user.user)

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    {
                        isEdit === false ?
                        (
                            <div className="container shadow-m-4 my-2 bg-white rounded">
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-5 text-capitalize border-bottom py-1'>
                                            Name: <span className='fs-5 fw-bold ms-2'>{user?.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-5  border-bottom py-1'>
                                            Github username: <span className='fs-5 fw-bold ms-2'>{user?.github_username}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-5  border-bottom py-1'>
                                            Email: <span className='fs-5 fw-bold ms-2'>{user?.email}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-5  border-bottom py-1'>
                                            Role:
                                                {
                                                    user?.role === true ? (
                                                        <NavLink
                                                        to='/admin'
                                                        className='btn bg-purple rounded ms-4 mt-0'>
                                                            Admin Settings
                                                            <i className="fas fa-user-shield text-dark ms-1"></i>
                                                        </NavLink>
                                                    ):(
                                                        <div
                                                        className='fs-6 m-0 d-flex align-items-center'>
                                                            You don't have any admin access
                                                            <i className="fas fa-ban ms-2"></i>
                                                        </div>
                                                    )
                                                }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-6  border-bottom py-1'>
                                            Github: <span className='fs-6 ms-2'>{user?.github}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-6  border-bottom py-1'>
                                            About: <span className='fs-6 ms-2'>{user?.about}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-6  border-bottom py-1'>
                                            Created Time: <span className='fs-6 ms-2'>{user?.createdAt}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-2 mb-2">
                                        <div
                                        className='d-flex align-items-center justify-content-between m-0 fw-normal fs-6  border-bottom py-2'>
                                            <button
                                            onClick={() => setisEdit(!isEdit)}
                                            className='btn bg-yellow mt-0'>
                                                Edit Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : <EditAccount setisEdit={setisEdit}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Account
