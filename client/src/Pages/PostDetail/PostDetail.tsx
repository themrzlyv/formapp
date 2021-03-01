import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { getSinglePost } from '../../Global/Actions/postAction'
import { RootStore } from '../../Global/Store'
import AdminMode from './AdminMode'
import InboxIcon from '@material-ui/icons/Inbox';
import BuildIcon from '@material-ui/icons/Build';
import DescriptionIcon from '@material-ui/icons/Description';
interface Iprops extends RouteComponentProps<{id:string}> {
    
}

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root:{
            maxWidth: 760,
            '& > *' : {
                color: 'black'
            }
        },
        CardAction: {
            display: 'flex',
            justifyContent: "flex-end"
        },
        typo: {
            display: 'flex',
            alignItems: 'center'
        },
        icons: {
            marginRight: '5px'
        }
    })
)


const PostDetail:React.FC<Iprops> = ({match}) => {

    const classes = useStyles()

    const [isAdmin, setisAdmin] = useState(false)
    const dispatch = useDispatch()

    const post = useSelector((state:RootStore) => state.posts.post)
    const user = useSelector((state:RootStore) => state.user.user)


    useEffect(() => {
        dispatch(getSinglePost(match.params.id))
    },[post?.category])



    return (
        <Grid container justify="center" >
            <Grid item={true}>
                {
                    isAdmin === false ? 
                    (
                        <Card className={classes.root}>
                                {
                                    user && user?.role === true ?
                                    (
                                        <CardActions className={classes.CardAction}>
                                            <Button 
                                            size="small" 
                                            color="secondary" 
                                            variant="contained"
                                            onClick={() => setisAdmin(!isAdmin)}
                                            >
                                                <BuildIcon className={classes.icons} fontSize="small"/>
                                                Edit
                                            </Button>
                                        </CardActions>
                                    )
                                    : null
                                }
                            <CardActionArea>
                                <CardContent>
                                    <Typography
                                    gutterBottom 
                                    variant="h5" 
                                    component="div">
                                        <Box fontWeight="fontWeightBold" m={1}>
                                            {post?.title}
                                        </Box>
                                    </Typography>
                                    <Typography className={classes.typo} gutterBottom variant="h6" component="h4">
                                        <InboxIcon className={classes.icons}/>
                                        {post?.category}
                                    </Typography>
                                    <Typography className={classes.typo} variant="body2" color="textSecondary" component="p">
                                        <DescriptionIcon className={classes.icons}/>
                                        {post?.description}
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    alt="Post Photo"
                                    height="450"
                                    image={post?.image}
                                    title={post?.title}
                                    />
                            </CardActionArea>
                        </Card>
                    ): <AdminMode changeEditMode={setisAdmin} currentPost={post}/>
                }
            </Grid>
        </Grid>
    )
}

export default PostDetail
