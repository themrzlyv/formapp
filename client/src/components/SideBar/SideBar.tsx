import { Button, createStyles, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Theme} from '@material-ui/core'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { RootStore } from '../../Global/Store'
import ApartmentIcon from '@material-ui/icons/Apartment';
import PhoneIcon from '@material-ui/icons/Phone';
import PublicIcon from '@material-ui/icons/Public';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                color: "black"
            }
        },
        subheader: {
            display:'flex',
            alignItems: "center"
        },
        typhography : {
            marginLeft: '0.5em'
        },
        icons: {
            color: theme.palette.text.primary
        }
    })
)


const SideBar = () => {
    const classes = useStyles()
    const categories = useSelector((state:RootStore) => state.category.categories)


    return (
        <>
            <List
            component="ul"
            className={classes.root}
            >
                <NavLink to="/about">
                    <ListItem button>
                        <ListItemIcon>
                            <ApartmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Company" />
                    </ListItem>
                </NavLink>
                <NavLink to="/contact">
                    <ListItem button>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </NavLink>
                <NavLink to="/posts">
                    <ListItem button>
                        <ListItemIcon>
                            <PublicIcon />
                        </ListItemIcon>
                        <ListItemText primary="Explore" />
                    </ListItem>
                </NavLink>
            </List>
            <Divider variant="middle" />

            <List
            component="ul"
            className={classes.root}
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <Button disabled color="primary">All Tags</Button>
                </ListSubheader>
            }
            >
                {
                    categories && categories.map(category => (
                        <NavLink key={category._id} to={`/category/${category._id}`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <SubdirectoryArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText primary={category.title} />
                            </ListItem>
                        </NavLink>
                    ))
                }
            </List>
        </>
    )
}

export default SideBar


