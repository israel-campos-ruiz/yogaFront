import React from 'react'
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InsertNewPassword from '../components/login/InsertNewPassword';
import RecoverPassword from '../components/login/RecoverPassword';
import LoginRouter from './LoginRouter';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>        
            <Switch>
               <Route exact path='/login' component={ LoginRouter }/>
               <Route exact path="/recuperar" component={RecoverPassword} />
               <Route exact path="/recuperar/:token" component={InsertNewPassword} />
               <Route path="/" component={PublicRoutes} />
            </Switch>
        </Router>
    )
}
export default AppRouter
