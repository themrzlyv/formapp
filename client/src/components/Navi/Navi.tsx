import React from 'react'
import {useRouter} from '../../hooks/useRouter'
import {useToasts} from 'react-toast-notifications'
import { useSelector , useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { logoutUser } from '../../Global/Actions/userAction'
import { RootStore } from '../../Global/Store'
import { FiLogIn , FiLogOut } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import { GiStrikingArrows } from "react-icons/gi";

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
            <>
                <li className="nav-item me-2">
                    <NavLink className="nav-link" to="/account">
                        <MdAccountCircle fontSize={23} />
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <a 
                    onClick={logout}
                    className="nav-link d-flex align-items-center">
                        <FiLogOut fontSize={23} />
                    </a>
                </li>
            </>
        );
    }

    const notUser = ():JSX.Element => {
        return(
            <>
                <li className="nav-item me-3">
                    <NavLink to='/login' className=" nav-link">
                        <FiLogIn fontSize={23} />
                    </NavLink>
                </li>
            </>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-m-8">
            <div className="container navbar-container">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <GiStrikingArrows fontSize={20} className="mx-2"/>
                    Flexline
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-align-right"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav d-flex align-items-center justify-content-center">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">
                                <AiOutlineHome fontSize={23} />
                            </NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to='/posts' className="nav-link">
                                <VscRemoteExplorer fontSize={23} />
                            </NavLink>
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
