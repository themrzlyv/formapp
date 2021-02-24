import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { postData } from '../../helpers/fetchData'

interface Iform {
    name: string | number;
    email: string | number;
    password: string | number;
    github_username: string;
    github: string;
    about: string;
}

const Register:React.FC = () => {
    const { addToast } = useToasts();

    const [form, setform] = useState<Iform>({name: '' ,email: '', password: '',github_username: '',github: '', about: ''})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setform({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>):Promise<void | "/"> => {
        event.preventDefault()
        const result = await postData(`/user/register`,form)
        if(result.error){
            return addToast(result.error , {appearance:'error',autoDismiss: true,})
        }
        return window.location.href = "/";
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-5 mx-auto my-2">
                    <h4 className="h4 fw-bold fs-5">
                        <i className="fas fa-door-open mx-2"></i>
                        Sign in
                    </h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-5 mx-auto my-3'>
                    <form 
                    onSubmit={handleSubmit} 
                    autoComplete='false'>
                        <div className="form-floating mb-3">
                            <input
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
                            name='password'
                            onChange={handleChange}
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
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
                            name='about'
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="about"
                            placeholder="About"/>
                            <label htmlFor="about">About</label>
                        </div>
                        <div className="form-floating mb-3 d-flex">
                            <button
                            className='btn-teal p-2 d-flex align-items-center '>
                                <i className="far fa-arrow-alt-circle-right mx-1"></i>
                                Signin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className='col-lg-5 mx-auto '>
                    <p>
                        You have already accound? <NavLink className='text-red' to='/login'>Login Now</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
