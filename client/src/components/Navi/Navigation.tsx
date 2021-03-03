import React from 'react'
import { useRouter } from '../../hooks/useRouter';
import {IoReturnUpBack} from 'react-icons/io5'
import {TiLocationArrow} from 'react-icons/ti'



const Navigation = () => {

    const router = useRouter()
    const handleClick = () => {
        router.history.goBack()
    }
    
    return (
        <>
            {
                router.pathname === "/" ? null :
                (
                    <div className="container mt-3 p-0">
                        <div className="col-lg-12  d-flex align-items-center">
                            <button
                            className="btn shadow-m-8 d-flex align-items-center btn-warning me-1"
                            onClick={handleClick}>
                                <IoReturnUpBack fontSize={20}/>
                                Back
                            </button>
                            <button
                            className="btn ms-1 btn-success"
                            disabled>
                                <TiLocationArrow fontSize={20} />
                                {
                                    router.pathname.replace(/^[A-Za-z]+$/, '*')
                                }
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Navigation
