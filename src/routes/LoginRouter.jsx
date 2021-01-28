import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../pages/Login';
const LoginRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/login" component={ Login } />
            </Switch>
        </div>
    )
}

export default LoginRouter
