import { Box, Button, Card, CardActionArea, CardActions, createStyles, Grid, Link, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import { useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import EditAccount from '../../components/EditAccount/EditAccount'
import { RootStore } from '../../Global/Store'
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        root: {
            maxWidth: '550px',
            display:'flex',
            flexDirection:'column',
            margin: 'auto'
        },
        typo: {
            width: '100%',
            borderBottom: '1px dotted gray',
            padding: '5px 0',
            margin: '0.3em 0',
            display: 'flex',
            alignItems: 'center'
        }
    })
)





const Account = () => {
    const classes = useStyles()
    const [isEdit, setisEdit] = useState<boolean>(false)
    const user = useSelector((state: RootStore) => state.user.user)

    return (
        <>
            {
                isEdit === false ?
                (
                        <Grid container className={classes.root}>
                            <Grid item={true} >
                                <Paper>
                                    <Link color="secondary" href={`http://${user?.github}`} underline="none">
                                        <Button>
                                            <GitHubIcon />
                                            <Typography  component="div">
                                                <Box fontWeight={500} m={1}>
                                                    {user?.github_username}
                                                </Box>
                                            </Typography>
                                        </Button>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid container  >
                                <Grid  item={true} xs={12}>
                                    <Card>
                                        <CardActions>
                                            <Button
                                            className='bg-yellow'
                                            onClick={() => setisEdit(!isEdit)}
                                            >
                                                Edit
                                            </Button>
                                        </CardActions>
                                        <CardActionArea>
                                            <Typography className={classes.typo} variant="h6" component="h6">
                                                Name: {user?.name}
                                            </Typography>
                                            <Typography className={classes.typo} variant="h6" component="h6">
                                                Github username: {user?.github_username}
                                            </Typography>
                                            <Typography className={classes.typo}  variant="h6" component="h6">
                                                Email: {user?.email}
                                            </Typography>
                                            <Typography className={classes.typo} variant="h6" component="h6">
                                                Role:
                                                    {
                                                        user?.role === true ? (
                                                            <NavLink
                                                            to='/admin'>
                                                                <Button variant="contained" className='bg-teal'>
                                                                Admin Settings
                                                                </Button>
                                                            </NavLink>
                                                        ):(
                                                            <Typography className={classes.typo} variant="subtitle2" component="h6">
                                                                You don't have any admin access
                                                            </Typography>
                                                        )
                                                    }
                                            </Typography>
                                            <Typography className={classes.typo} variant="h6" component="h6">
                                                Github: {user?.github}
                                            </Typography>
                                            <Typography className={classes.typo} variant="h6" component="h6">
                                                About: {user?.about}
                                            </Typography>
                                            <Typography className={classes.typo} variant="h6" component="h6">
                                                Created Time:{user?.createdAt}
                                            </Typography>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                ) : <EditAccount setisEdit={setisEdit}/>
            }
        </>
    )
}

export default Account
