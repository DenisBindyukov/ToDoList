import React, {useContext, useEffect} from 'react'
import './App.css'
import {context} from '../index'
import {
    AppBar,
    Button,
    Container,
    IconButton,
    LinearProgress,
    Toolbar,
    Typography,
} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './store'
import {initializeApp, RequestStatusType} from './app-reducer'
import {Login} from "../features/Login/Login";
import {Route, Switch, Redirect} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import {logout} from "../features/Login/auth-reducer";
import {Label} from "../components/test/Label";

type PropsType = {
    demo?: boolean
}

const App = ({demo = false}: PropsType) => {

    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status);
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized);
    const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, [])

    const logoutHandler = () => {
        dispatch(logout());
    }


    if (!isInitialized) {
        return <div style={{position: "fixed", top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress color="secondary"/>
        </div>
    }

    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    {isLoggedIn && <Button color="inherit" onClick={logoutHandler}>Log out</Button>}
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <Switch>
                    <Route exact path={'/'} render={() => <TodolistsList demo={demo}/>}/>
                    <Route exact path={'/login'} render={() => <Login/>}/>
                    <Route exact path={'/404'} render={() =>
                        <div style={{position: 'fixed', top: '30%', left: '40%', textAlign: 'center'}}><h1> 404: PAGE
                            NOT FOUND</h1></div>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </Container>
            <Label/>
        </div>
    )
}


export default App
