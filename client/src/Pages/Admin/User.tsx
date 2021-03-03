import React, { useEffect } from 'react'
import {useToasts} from 'react-toast-notifications'
import {useDispatch,useSelector} from 'react-redux'
import { changeUserRole, deleteUser, getAllUsers } from '../../Global/Actions/adminAction'
import { RootStore } from '../../Global/Store'

const User = () => {
    const {addToast} = useToasts()
    const dispatch = useDispatch()
    const users = useSelector((state:RootStore) => state.users.users)

    useEffect(() => {
        dispatch(getAllUsers())
    },[])

    const changeRole = (id:string) => {
        dispatch(changeUserRole(id))
        addToast('User role is changed' , {appearance: 'warning', autoDismiss: true})
    }

    const handleDelete = (id:string) => {
        dispatch(deleteUser(id))
        addToast('User is deleted' , {appearance: 'warning', autoDismiss: true})
    }

    return (
        <div className='container'>
            <div className="row p-0">
                <div className="col-lg-12 p-0">
                    <table className="table align-middle p-0 m-0">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Github name</th>
                                <th scope="col">Role</th>
                                <th scope="col">Config</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users && users.map(user => (
                                    <tr key={user?._id}>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.github_username}</td>
                                        <td>
                                            {
                                                user?.role === true ?
                                                (
                                                    <button
                                                    onClick={() => changeRole(user?._id)}
                                                    className="btn bg-yellow text-white">
                                                        <i className="fas fa-headset"></i>
                                                    </button>
                                                )
                                                :
                                                (
                                                    <button 
                                                    onClick={() => changeRole(user?._id)}
                                                    className="btn bg-yellow text-white">
                                                        <i className="fas fa-headphones-alt"></i>
                                                    </button>
                                                )
                                            }
                                        </td>
                                        <td>
                                            <button 
                                            onClick={() => handleDelete(user?._id)}
                                            disabled={user.role}
                                            className='btn bg-red text-white'
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User

