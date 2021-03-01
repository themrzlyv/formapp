import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Badge, Button, createStyles, IconButton, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { useRouter } from '../../hooks/useRouter';
import { logoutUser } from '../../Global/Actions/userAction';
import { useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        icons: {
            color: '#FBF5F3'
        }
    })
)

const UserLink = () => {

    const classes = useStyles()
    const router = useRouter()
    const {addToast} = useToasts()
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        addToast('Logged out' , {appearance:'success', autoDismiss:true})
        dispatch(logoutUser())
        router.push("/login")
    }

    return (
        <div>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Badge>
                    <AccountCircleIcon className={classes.icons}/>
                </Badge>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem >
                    <NavLink to="/account">Profile</NavLink>
                </MenuItem>
                <MenuItem>
                    <Button 
                    style={{display:'flex',alignItems:"center"}}
                    onClick={logout} 
                    variant="contained" 
                    size="small" 
                    color="secondary">
                        Logout
                        <ExitToAppIcon className={classes.icons}/>
                    </Button>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default UserLink;