import React from 'react'
import { useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { RootStore } from '../../Global/Store'
import UserLink from './UserLink'
import { AppBar, 
    Badge, 
    createStyles, 
    Grid, 
    IconButton, 
    makeStyles, 
    Theme, 
    Toolbar, 
    Typography} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import CallSplitIcon from '@material-ui/icons/CallSplit';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.main ,
            padding: '0px'
        },
        typhography : {
            color: '#FBF5F3'
        },
        icons: {
            color: '#FBF5F3'
        }
    })
)



const Navi = () => {

    const classes = useStyles()
    const user = useSelector((state: RootStore) => state.user.user)
    const error = useSelector((state: RootStore) => state.user.error)
    
 
    const notUser = ():JSX.Element => {
        return(
            <NavLink to="/login">
                <IconButton>
                    <Badge>
                        <PowerSettingsNewIcon className={classes.icons}/>
                    </Badge>
                </IconButton>
            </NavLink>
        );
    }

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid  container={true} alignItems="center" wrap="nowrap" justify="space-between">
                    <Grid item={true} container alignItems="center">
                        <CallSplitIcon className={classes.icons}/>
                        <NavLink to="/">
                            <Typography variant="h5" className={classes.typhography}>
                                FlexLine
                            </Typography>
                        </NavLink>
                    </Grid>
                    <Grid item={true} container justify="flex-end" alignItems="center">
                        <NavLink to="/">
                            <IconButton>
                                <Badge>
                                    <HomeIcon className={classes.icons}/>
                                </Badge>
                            </IconButton>
                        </NavLink>
                        {
                            user && <UserLink />
                        }
                        {
                            error &&  notUser() 
                        }
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navi


