import React,{useEffect} from 'react'
import { ToastProvider } from 'react-toast-notifications';
import {useDispatch} from 'react-redux'
import {BrowserRouter as Router, useParams} from 'react-router-dom'
import Navi from './components/Navi/Navi'
import { getUser } from './Global/Actions/userAction'
import MainPages from './Pages/MainPages'
import { getAllCategories } from './Global/Actions/categoryAction';
import { getAllPosts } from './Global/Actions/postAction';
import Navigation from './components/Navi/Navigation';

const App:React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
        dispatch(getAllCategories())
        dispatch(getAllPosts())
    }, [])
    return (
        <Router>
            <ToastProvider autoDismissTimeout={2000}>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-lg-12  p-0">
                            <Navi />
                        </div>
                    </div>
                    <Navigation />
                    <div className="row">
                        <div className="col-lg-12 mt-4 p-0">
                            <MainPages />
                        </div>
                    </div>
                </div>
            </ToastProvider>
        </Router>
    )
}

export default App
