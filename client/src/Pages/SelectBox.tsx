import React from 'react'
import {ErrorMessage ,Field,useField} from 'formik'
import { CategoryDataType } from '../Global/Actions/categoryActionTypes'


interface Iprops {
    name: string;
    options: CategoryDataType[] | undefined;
}

const SelectBox:React.FC<Iprops> = ({ name , options, ...rest }) => {
    return (
        <div className=' mb-3'>
            <Field 
            as='select'
            id={name}
            name={name}
            {...rest}
            >   
                <option value={name}>{`Choose a ${name}`}</option>
                {
                    options?.map(option => (
                        <option key={option._id} value={option.title}>{option.title}</option>
                    ))
                }
            </Field>
            <ErrorMessage component="div" className="text-red" name={name}/>
        </div>
    )
}

export default SelectBox
