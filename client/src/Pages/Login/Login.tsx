import React,{useState} from 'react'
import {Formik , Form} from 'formik'
import * as Yup from 'yup'
import { NavLink } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { postData } from '../../helpers/fetchData'
import TextField from '../../components/TextField/TextField';

interface Iform {
    email: String ;
    password: String ;
}

const Login:React.FC = () => {
    const { addToast } = useToasts();

    const validationSchema = Yup.object({
        email: Yup.string()
        .email('Email is invalid!')
        .required('Required!'),
        password: Yup.string()
        .min(6,'Password must be min 6 character')
        .required('Required!')
    })

    const handleSubmit = async (values:Iform):Promise<void | "/"> => {
        const result = await postData(`user/login`,values)
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
                        Login
                    </h4>
                </div>
            </div>
            <div className='row'>
                <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
                >
                    {formik => (
                        <div className="col-lg-5 mx-auto mt-2">
                            <Form>
                                <TextField label ="Email" name="email" type="email"/>
                                <TextField label ="Password" name="password" type="password"/>
                                <button className="btn btn-teal mt-3" type="submit">Login</button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
            <div className="row">
                <div className='col-lg-5 mx-auto mt-3'>
                    <p>
                        You don't have any accound? <NavLink className='text-red' to='/register'>Signin Now</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
