import React, { ChangeEvent, useState } from 'react'
import {useRouter} from '../../hooks/useRouter'
import {useDispatch,useSelector} from 'react-redux'
import { deletePost, updatePost } from '../../Global/Actions/postAction'
import { PostDataType } from '../../Global/Actions/postActionTypes'
import { RootStore } from '../../Global/Store'
import { imageUpload } from '../../helpers/fetchData'
import { Button, CardMedia, createStyles, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Theme } from '@material-ui/core'
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';




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

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root:{
            maxWidth: 760,
        },
        input: {
            display: 'none',
        },
        form: {
            display:'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: '1em 0'
        },
        griditems: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            margin: '1em 0'
        },
        fieldWidth: {
            width: '60%'
        },
        icons: {
            marginLeft: '5px',
            marginRight: '5px'
        }
    })
)


const AdminMode:React.FC<Iprops> = ({currentPost, changeEditMode}) => {
    const classes = useStyles()
    const router = useRouter()
    const dispatch = useDispatch()
    const categories = useSelector((state:RootStore) => state.category.categories)

    const [mediaurl, setmediaurl] = useState<File | null | undefined>()
    const [form, setform] = useState<Iform>({title: currentPost?.title, category: currentPost?.category, description: currentPost?.description, image: currentPost?.image})

    const handleChange = (event: ChangeEvent<any>):void => {
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
        <Grid className={classes.root} container spacing={1}>
            <Paper>
                <form 
                className={classes.form}
                onSubmit={handleSubmit}
                autoComplete='off'>
                    <Grid item={true} className={classes.griditems}>
                        <TextField
                        className={classes.fieldWidth}
                        color="secondary"
                        name='title'
                        defaultValue={form.title}
                        onChange={handleChange}
                        label="Title"
                        id="title"/>
                    </Grid>
                    
                    <Grid item={true} className={classes.griditems}>
                        <FormControl className={classes.fieldWidth}>
                            <InputLabel  id="tagname">Tag Name</InputLabel>
                            <Select
                            style={{width: '100%'}}
                            color="secondary"
                            labelId="tagname"
                            id="tagname"
                            value={form.category}
                            name='category'
                            onChange={handleChange}
                            >
                                {
                                    categories && categories.map(item => (
                                        <MenuItem
                                        key={item._id}
                                        value={item.title}>
                                            {item.title}
                                        </MenuItem>
                                        ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item={true} className={classes.griditems}>
                        <input
                            onChange={handleMedia}
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label className={classes.fieldWidth} htmlFor="contained-button-file">
                            <Button 
                            style={{width: '100%'}}
                            className='bg-orange text-white'
                            variant="contained"  
                            component="span">
                            Upload
                            </Button>
                        </label>
                        
                    </Grid>

                    <Grid item={true} className={classes.griditems}>
                        <CardMedia
                        className={classes.fieldWidth}
                        component="img"
                        alt="Post image"
                        height="200"
                        image={mediaurl ? URL.createObjectURL(mediaurl): form.image}
                        title="Post image"
                        />
                    </Grid>

                    <Grid item={true} className={classes.griditems}>         
                        <TextField
                        className={classes.fieldWidth}
                        color="secondary"
                        name='description'
                        defaultValue={form.description}
                        onChange={handleChange}
                        label="description"
                        id="description"/>
                    </Grid> 

                    <Grid container justify="space-evenly" className={classes.griditems} >
                        <Button 
                        size="small"
                        className='bg-gray text-white'
                        variant="contained"
                        onClick={() => changeEditMode(false)}
                        >
                            <ArrowLeftOutlinedIcon className={classes.icons}/>
                            Back
                        </Button>
                        <Button 
                        style={{margin:'0 0.8em'}}
                        size="small"
                        className='bg-red text-white'
                        variant="contained"
                        onClick={handleDelete}
                        >
                            <DeleteIcon className={classes.icons}/>
                            Remove
                        </Button>
                        <Button 
                        size="small"
                        type="submit"
                        className='bg-teal text-white'
                        variant="contained"
                        >
                            <SaveAltOutlinedIcon className={classes.icons}/>
                            Save
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
}

export default AdminMode
