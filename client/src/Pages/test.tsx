import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {Formik , Form, FormikProps} from 'formik'
import * as Yup from 'yup'
import { imageUpload } from '../helpers/fetchData'
import { RootStore } from '../Global/Store'
import SelectBox from './SelectBox'
import { CategoryDataType } from '../Global/Actions/categoryActionTypes'


interface Iform {
    name: string;
    category: string ;
}



const Test = () => {
    const categories = useSelector((state:RootStore) => state.category)

    const [mediaurl, setmediaurl] = useState<string>()

    const validate = Yup.object({
        name: Yup.string()
        .max(15,'Name must be max 15 character')
        .required('Required!'),
    })

    const uploader = async(event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        const url = await imageUpload(file)
        setmediaurl(url)
    }

    const handleSubmit = async(values: Iform):Promise<void> => {
        console.log({...values,avatar:mediaurl})
    }

    return (
        <Formik
        initialValues={{
            name: '',
            category: ''
        }}
        validationSchema={validate}
        onSubmit={(values) => handleSubmit(values)}
        >
            {(formik: FormikProps<Iform>) => (
                <div className='col-lg-6 mx-auto'>
                    <h1>signin</h1>
                    <Form>
                        <input type="text" defaultValue="samir" name="name" onChange={formik.handleChange}/>
                        <SelectBox 
                            name="category"  
                            options={categories.categories} 
                            />
                        <input
                        className='form-control mb-2'
                        name="avatar" 
                        type="file" 
                        onChange={uploader}/>
                        <button className="btn btn-teal mt-3" type="submit">Signin</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Test
