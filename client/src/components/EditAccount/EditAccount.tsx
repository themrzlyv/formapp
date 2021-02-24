import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useToasts } from 'react-toast-notifications';
import { RootStore } from '../../Global/Store';
import { getData, putData } from '../../helpers/fetchData';


interface Iform {
    name: string | undefined;
    email: string | undefined;
    github_username: string | undefined;
    github: string | undefined;
    about: string | undefined;
}

interface Iprops {
    setisEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const EditAccount:React.FC<Iprops> = ({setisEdit}) => {

    const { addToast } = useToasts();
    const dispatch = useDispatch()
    const user = useSelector((state: RootStore) => state.user.user)
    
    const [form, setform] = useState<Iform>({name: user?.name ,email: user?.email,github_username: user?.github_username,github: user?.github, about: user?.about})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setform({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>):Promise<void | "/account"> => {
        event.preventDefault()
        const result = await putData(`/user/profile`,form)
        if(result.error){
            return addToast(result.error , {appearance:'error',autoDismiss: true,})
        }
        return window.location.href = '/account'
    }

    return (
        <div className="container shadow-m-7 rounded">
            <div className="row">
                <div className="col-lg-12 mt-3 mb-2">
                    <div
                    className="h4 d-flex align-items-center justify-content-center m-0 py-2 text-orange fw-bold border-bottom">
                        Edit your information
                        <i className="far fa-user-circle text-dark ms-2"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 mt-3 mb-2">
                <form 
                    onSubmit={handleSubmit} 
                    autoComplete='false'>
                        <div className="form-floating mb-3">
                            <input
                            value={form.name}
                            name='name'
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            value={form.email}
                            name='email'
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Email"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            value={form.github_username}
                            name='github_username'
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="github_username"
                            placeholder="Github username"/>
                            <label htmlFor="github_username">Github username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            value={form.github}
                            name='github'
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="github"
                            placeholder="Github"/>
                            <label htmlFor="github">Github</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            value={form.about}
                            name='about'
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="about"
                            placeholder="About"/>
                            <label htmlFor="about">About</label>
                        </div>
                        <div className="form-floating mb-3 d-flex align-items-center ">
                            <button
                            onClick={() => setisEdit(false)}
                            className='btn-white p-2 d-flex align-items-center me-3'>
                                <i className="far fa-arrow-alt-circle-left me-1"></i>
                                Go Back
                            </button>
                            <button
                            className='btn-teal p-2 d-flex align-items-center '>
                                <i className="far fa-check-circle me-1"></i>
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditAccount
