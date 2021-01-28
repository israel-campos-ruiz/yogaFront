import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { AuthContext } from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Services from "../pages/Services";
import PrivateRoutes from "./PrivateRoutes";
const PublicRoutes = () => {
  const context = useContext(AuthContext)
  const token = context?.auth?.token;
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/inicio" component={Dashboard} />
        <Route exact path="/servicios" component={Services} />
        <PrivateRoutes isAuthenticated={!!token} path="/perfil/:id" component={Profile} />
        <Redirect from="/" to="/inicio" />
      </Switch>
    </div>
  );
};

export default PublicRoutes;
