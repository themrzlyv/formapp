import React,{useState} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import Admin from '../Admin/Admin'
import EditAccount from '../../components/EditAccount/EditAccount'
import { RootStore } from '../../Global/Store'

const Account = () => {
    const [isEdit, setisEdit] = useState<boolean>(false)

    const dispatch = useDispatch()

    const user = useSelector((state: RootStore) => state.user.user)

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    {
                        isEdit === false ?
                        (
                            <div className="container shadow-m-7 rounded">
                                <div className="row">
                                    <div className="col-lg-12 mt-2 mb-2">
                                        <div
                                        className="h4 d-flex align-items-center justify-content-center m-0 py-2 text-orange fw-bold border-bottom">
                                            {user?.github_username}
                                            <a href={`http://${user?.github}`}>
                                                <i className="fab fa-github text-dark ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-5 text-capitalize border-bottom py-1'>
                                            <i className="fas fa-share me-1"></i>
                                            Name: <span className='fs-5 fw-bold ms-2'>{user?.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-5  border-bottom py-1'>
                                            <i className="fas fa-share me-1"></i>
                                            Github username: <span className='fs-5 fw-bold ms-2'>{user?.github_username}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-5  border-bottom py-1'>
                                            <i className="far fa-envelope-open me-1"></i>
                                            Email: <span className='fs-5 fw-bold ms-2'>{user?.email}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-5  border-bottom py-1'>
                                            <i className="fas fa-cog me-1"></i>
                                            Role:
                                                {
                                                    user?.role === true ? (
                                                        <NavLink
                                                        to='/admin'
                                                        className='btn btn-purple ms-4 mt-0'>
                                                            Admin Settings
                                                            <i className="fas fa-user-shield text-dark ms-1"></i>
                                                        </NavLink>
                                                    ):(
                                                        <div
                                                        className='h5 m-0 d-flex align-items-center'>
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
                                            <i className="fab fa-github-alt me-1"></i>
                                            Github: <span className='fs-6 ms-2'>{user?.github}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-6  border-bottom py-1'>
                                            <i className="far fa-address-card me-1"></i>
                                            About: <span className='fs-6 ms-2'>{user?.about}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <div
                                        className='d-flex align-items-center m-0 fw-normal fs-6  border-bottom py-1'>
                                            <i className="far fa-calendar-alt me-1"></i>
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
                                            className='btn btn-orange mt-0'>
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
