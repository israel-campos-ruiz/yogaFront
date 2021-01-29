import React from 'react'
import {  HashRouter as Router, Switch, Route } from "react-router-dom";
import LoginRouter from './LoginRouter';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
    return (
        <Router>        
            <Switch>
               <Route exact path='/login' component={ LoginRouter }/>
               <Route path="/" component={PublicRoutes} />
            </Switch>
        </Router>
    )
}
export default AppRouter
