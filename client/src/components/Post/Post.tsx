import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { PostDataType } from '../../Global/Actions/postActionTypes'

interface Iprops {
    item: PostDataType
}

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root:{
            maxWidth: 345,
            '& > *' : {
                color: 'black'
            }
        }
    })
)


const Post:React.FC<Iprops> = ({item}) => {

    const classes = useStyles()
    
    return (
        <Grid item={true}  >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Post Photo"
                        height="140"
                        image={item.image}
                        title="Contemplative Reptile"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <NavLink to={`/post/${item._id}`} >
                        <Button size="small" color="secondary" variant="contained">
                            Read More
                        </Button>
                    </NavLink>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Post




{/* <div className='col-lg-5 post-card mx-auto shadow-m-1  my-2 p-0 '>
<div className='card'>
    <div className='row g-0'>
        <div className="col-md-4 d-flex align-items-center p-1">
            <img src={item.image} className='img-thumbnail img-fluid' />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="fs-5 card-title fw-bold text-dark m-0 border-bottom py-1">
                    <i className="fas fa-bullhorn me-1 fs-6"></i>
                    {item.title}
                </h5>
                <h5 className="fs-6 card-text text-gray m-0 border-bottom py-1 my-2">
                    <i className="fas fa-box-open me-1 text-dark fs-6"></i>
                    {item.category}
                </h5>
                <p className="fs-6 card-text text-dark fst-italic m-0 mb-2">
                    <i className="far fa-comment-alt me-2 fs-6"></i>
                    {item.description}
                </p>
                <NavLink
                to={`/post/${item._id}`}
                className="btn btn-yellow shadow-m-4 text-dark w-50 rounded">
                    <i className="fas fa-book-reader me-1"></i>
                    Read More
                </NavLink>
            </div>
        </div>
    </div>
</div>
</div> */}