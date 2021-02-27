import React from 'react'
import {ErrorMessage ,useField} from 'formik'


interface Iprops {
    label:string;
    name:string;
    type:string;
}


const TextField:React.FC<Iprops> = ({label , ...props}) => {
    const [field,meta] = useField(props)
    return (
        <div className='form-floating mb-3'>
            <input 
            placeholder={field.name}
            className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
            autoComplete="off"
            {...field} {...props}
            />
            <label htmlFor={field.name}>{label}</label>
            <ErrorMessage component="div" className="text-red" name={field.name}/>
        </div>
    )
}

export default TextField
