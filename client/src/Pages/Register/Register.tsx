import React,{useState} from 'react'
import {Formik , Form} from 'formik'
import * as Yup from 'yup'
import { NavLink } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { postData } from '../../helpers/fetchData'
import TextField from '../../components/TextField/TextField';

interface Iform {
    name: string ;
    email: string ;
    password: string ;
    github_username: string;
    github: string;
    about: string;
}

const Register:React.FC = () => {
    const { addToast } = useToasts();

    const validationSchema = Yup.object({
        name: Yup.string()
        .max(15,'Name must be max 15 character')
        .min(3,'Name must be min 3 character')
        .required('Required!'),
        email: Yup.string()
        .email('Email is invalid!')
        .required('Required!'),
        password: Yup.string()
        .min(6,'Password must be min 6 character')
        .required('Required!'),
        github_username: Yup.string()
        .max(15,'Github Username must be max 15 character')
        .required('Required!'),
        github: Yup.string()
        .max(35,'Github must be max 35 character')
        .required('Required!'),
        about: Yup.string()
        .max(65,'About must be max 65 character')
        .required('Required!'),
    })


    const handleSubmit = async (values:Iform):Promise<void | "/"> => {
        const result = await postData(`/user/register`,values)
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
                <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    github_username: '',
                    github: '',
                    about: ''
                }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
                >
                    {formik => (
                        <div className="col-lg-5 mx-auto mt-2">
                            <Form>
                                <TextField label ="Name" name="name" type="text"/>
                                <TextField label ="Email" name="email" type="email"/>
                                <TextField label ="Password" name="password" type="password"/>
                                <TextField label ="Github Username" name="github_username" type="text"/>
                                <TextField label ="Github" name="github" type="text"/>
                                <TextField label ="About" name="about" type="text"/>
                                <button className="btn btn-teal mt-3" type="submit">Signin</button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
            <div className="row">
                <div className='col-lg-5 mx-auto mt-3'>
                    <p>
                        You have already accound? <NavLink className='text-red' to='/login'>Login Now</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
