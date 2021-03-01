import React,{useEffect} from 'react'
import { ToastProvider } from 'react-toast-notifications';
import {useDispatch} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import Navi from './components/Navi/Navi'
import { getUser } from './Global/Actions/userAction'
import MainPages from './Pages/MainPages'
import { getAllCategories } from './Global/Actions/categoryAction';
import { getAllPosts } from './Global/Actions/postAction';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Navigation from './components/Navi/Navigation';


const theme = createMuiTheme({
    overrides: {
        MuiGrid: {
            root: {
                maxWidth:'1150px',
                margin:"1em auto"
            }
        },
        MuiButton: {
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        },
        MuiTextField: {
            root: {
                '& .MuiInputBase-input': {
                    color: 'black'
                }
            }
        },
        MuiSvgIcon: {
            root: {
                margin: '0 0.2em'
            }
        }
    },
    palette: {
        primary: { // for navbar
            main: '#6320EE',
        },
        secondary: { // for articles head
            main: '#004BA8',
        },
        warning: {
            main: '#F96E46',
        },
        background: { // for background
            default: '#FFFFFC'
        }
    }
})

const useStyles = makeStyles({
    appMain:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
})

const App:React.FC = () => {

    const classes = useStyles()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
        dispatch(getAllCategories())
        dispatch(getAllPosts())
    }, [])
    return (
        <Router>
            <ToastProvider autoDismissTimeout={2000}>
                <ThemeProvider theme={theme}>
                    <div className={classes.appMain}>
                        <Navi />
                        <Navigation />
                        <MainPages />
                    </div>
                </ThemeProvider>
                <CssBaseline />
            </ToastProvider>
        </Router>
    )
}

export default App
