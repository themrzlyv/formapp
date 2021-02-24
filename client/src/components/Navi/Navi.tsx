import React from 'react'
import {useRouter} from '../../hooks/useRouter'
import {useToasts} from 'react-toast-notifications'
import { useSelector , useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { logoutUser } from '../../Global/Actions/userAction'
import { RootStore } from '../../Global/Store'
import styles from './Navi.module.scss'

const Navi = () => {
    const router = useRouter()
    const {addToast} = useToasts()
    const dispatch = useDispatch()

    const user = useSelector((state: RootStore) => state.user.user)
    const error = useSelector((state: RootStore) => state.user.error)
    
    const logout = () => {
        event?.preventDefault()
        addToast('Logged out' , {appearance:'success', autoDismiss:true})
        dispatch(logoutUser())
        router.push("/login")
    }

    const userLink = ():JSX.Element => {
        return(
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {user?.name}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <NavLink className="dropdown-item text-purple" to="/account">Profile</NavLink>
                    </li>
                    <li>
                        <a 
                        onClick={logout}
                        className="dropdown-item text-purple d-flex align-items-center">
                            Signout
                            <i className="fas fa-sign-out-alt ms-1"></i>
                        </a>
                    </li>
                </ul>
            </li>
        );
    }

    const notUser = ():JSX.Element => {
        return(
            <>
                <li className="nav-item me-3">
                    <NavLink to='/login' className=" nav-link">Log in</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/register' className={`btn-white p-1 nav-link ${styles.btnSign}`}>Sign up</NavLink>
                </li>
            </>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-purple shadow-m-7">
            <div className="container navbar-container">
                <NavLink className="navbar-brand" to="/">Flexline</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-align-right"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav d-flex align-items-center justify-content-center">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to='/posts' className="nav-link">Explore</NavLink>
                        </li>
                        {
                            error &&  notUser() 
                        }
                        {
                            user && userLink()
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navi
