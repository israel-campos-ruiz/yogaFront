import React, { useContext } from "react";
import useClick from "../../hooks/useClick";
import "../../styles/shared/Navbars.css";
import NavbarAllPage from "./NavbarAllPage";
import logo from "../../assets/img/logo.png";
import {IconMenu} from "./IconMenu";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const id = 'click1'
const NavbarSmall = () => {
  const { click } = useClick(id);
  const {auth} = useContext(AuthContext)
  const history = useHistory();
  const {setAuth} = useContext(AuthContext)
  const handleCloseSesion = () => {
    localStorage.removeItem('auth')
    setAuth({})
    history.push('/login')
  }
   
  return (
    <>
      {click ? (
        <NavbarAllPage />
      ) : (
        <nav className={`navbar`}>
          <div className="navbar__flex">
           <NavLink exact to="/inicio">
           <img
              className="navbar__logo"
              src={logo}
              alt="imagen de flor juas juas"
            />
           </NavLink>
            <div style={{ zIndex: 16 }}  className="navbar__menu">
                <IconMenu id={id}/>
                <NavLink style={{textDecoration:'none'}} exact to={`/perfil/${auth?.client?._id}`}>
                   <p className="navbar__user__name">{auth?.client?.nombre}</p>
                </NavLink>
                {(auth?.token) && <button className="btn btn--navbar" onClick={handleCloseSesion}>cerrar sesión</button> }
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavbarSmall;
