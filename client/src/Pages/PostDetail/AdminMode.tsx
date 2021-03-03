import React, { useState } from 'react'
import {useRouter} from '../../hooks/useRouter'
import {useDispatch,useSelector} from 'react-redux'
import { deletePost, updatePost } from '../../Global/Actions/postAction'
import { PostDataType } from '../../Global/Actions/postActionTypes'
import { RootStore } from '../../Global/Store'
import { imageUpload } from '../../helpers/fetchData'
import {RiArrowGoBackFill} from 'react-icons/ri'
import {AiFillDelete} from 'react-icons/ai'
import {HiOutlineSave} from 'react-icons/hi'


interface Iform {
    title: string | undefined;
    category: string | undefined ;
    description: string | undefined;
    image: string | undefined  ;
}

interface Iprops {
    currentPost: PostDataType | undefined;
    changeEditMode: React.Dispatch<React.SetStateAction<boolean>>
}


const AdminMode:React.FC<Iprops> = ({currentPost, changeEditMode}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const categories = useSelector((state:RootStore) => state.category.categories)

    const [mediaurl, setmediaurl] = useState<File | null | undefined>()
    const [form, setform] = useState<Iform>({title: currentPost?.title, category: currentPost?.category, description: currentPost?.description, image: currentPost?.image})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>):void => {
        setform({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const handleMedia = (event:React.ChangeEvent<HTMLInputElement>) => {
        setmediaurl(event.target.files?.[0])
    }

    const handleSubmit = async(event:React.FormEvent<HTMLFormElement>):Promise<void> => {
        event.preventDefault()

        if(mediaurl === undefined){
            dispatch(updatePost(currentPost?._id,form))
        } else {
            const url = await imageUpload(mediaurl)
            const data = {...form,image:url}
            dispatch(updatePost(currentPost?._id,data))
        }

        changeEditMode(false)
        router.push(`/post/${currentPost?._id}`)
    }

    const handleDelete = () => {
        dispatch(deletePost(currentPost?._id))
        router.push(`/posts`)
    }
    
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 my-3">
                    <form 
                    onSubmit={handleSubmit}
                    autoComplete='off'>
                        <div className="form-floating mb-3">
                            <input
                            name='title'
                            value={form.title}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Title"/>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select 
                            name='category' 
                            defaultValue={form.category}
                            onChange={handleChange} 
                            className="form-select" 
                            id="category">
                                {
                                    categories && categories.map(item => (
                                    <option 
                                    value={item.title} 
                                    key={item._id}>
                                        {item.title}
                                    </option>
                                    ))
                                }
                            </select>
                            <label htmlFor="category">Category</label>
                        </div>
                        <div className=" mb-3">
                            <label 
                            htmlFor="formFile" 
                            className="form-label">
                                Choose image
                            </label>
                            <input 
                            onChange={handleMedia}
                            accept='image/*'
                            className="form-control" 
                            type="file" 
                            id="formFile" />
                            <img 
                            className=' card-img mt-2 img-fluid' 
                            src={mediaurl ? URL.createObjectURL(mediaurl): form.image}/>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            name='description'
                            value={form.description}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="description"
                            placeholder="Description"/>
                            <label htmlFor="descripiton">Description</label>
                        </div>
                        <div className="form-floating mb-3 d-flex">
                            <button 
                            onClick={() => changeEditMode(false)}
                            className="btn bg-secondary text-white d-flex align-items-center" 
                            data-bs-dismiss="modal">
                                <RiArrowGoBackFill fontSize={20} className="me-2"/>
                                Back
                            </button>
                            <button 
                            onClick={handleDelete}
                            type="button" 
                            className="btn bg-red text-white mx-2 d-flex align-items-center">
                                <AiFillDelete fontSize={20} className="me-2" />
                                Remove
                            </button>
                            <button type="submit" className="btn text-white bg-success d-flex align-items-center">
                                <HiOutlineSave fontSize={20} className="me-2" />
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminMode
