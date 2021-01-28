import { useState } from "react";
import CreateAccount from "../components/login/CreateAccount";
import InitSesion from "../components/login/InitSesion";
import "../styles/login/Login.css";
// import img from '../assets/img/banner.jpg'
const Login = () => {
  const [showComponent, setShowcomponent] = useState(false);
  const handleShowComponent = () => setShowcomponent(!showComponent);
  return (
    <div className="container">
      <div className="login">
        <div className="login__content">
          <h2 className="login__title">Bienvenido a mediyoga</h2>
          {showComponent ? (
            <h3 className="login__subtitle">Crea tú cuenta</h3>
          ) : (
            <h3 className="login__subtitle">Iniciar sesión</h3>
          )}
          {showComponent ? (
            <CreateAccount changeToLogin={handleShowComponent} />
          ) : (
            <InitSesion changeToCreateAccount={handleShowComponent} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
