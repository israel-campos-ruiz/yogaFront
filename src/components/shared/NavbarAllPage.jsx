import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useClick from "../../hooks/useClick";
import "../../styles/shared/Navbars.css";
import { CloseIconMenu } from "./IconMenu";
import NavbarSmall from "./NavbarSmall";

const NavbarAllPage = () => {
  const { click, setClick } = useClick("navbar2");
  const context = useContext(AuthContext)
  const id = context?.auth?.client?._id

  return (
    <>
      {click ? (
        <NavbarSmall />
      ) : (
        <div className="navbar__complete">
          <div className="navbar__flex" id="navbar2">
            <div
              style={{ zIndex: 16 }}
              id="click1"
              className="navbar__menu-end"
            >
              <CloseIconMenu />
            </div>
          </div>
          <ul className="navbar__items">
            <div className="navbar__item__container">
            <li className="list__item" onClick={() => setClick(true)}>
              <NavLink className="navbar__link" exact to="/inicio">inicio</NavLink>
            </li>
            <li className="list__item" onClick={() => setClick(true)}>
              <NavLink className="navbar__link" exact to="/servicios">servicios</NavLink>
            </li>
            <li className="list__item" onClick={() => setClick(true)}>
              <NavLink className="navbar__link" exact to={`/perfil/${id}`}>perfil</NavLink>
            </li>

            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarAllPage;
