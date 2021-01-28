import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import BANNERIMG from "../../assets/img/banner.jpg";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/dashboard/Banner.css";

const Banner = () => {
  const history = useHistory();
  const context = useContext(AuthContext)
  const token = context.auth?.token
  const handlePage = (param) => {
    history.push(`/${param}`);
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${BANNERIMG})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h5 className="banner__title">BIENVENIDO A MEDIYOGA</h5>
        <div>
          <h2 className="banner__subTitle">cambia tu vida</h2>
          <h2 className="banner__subTitle">con la meditación</h2>
        </div>
        <h1 className="banner__description">
          Una de las mejores escuelas en las que puedes tener clases de yoga,
          sentimos que una mente y cuerpo sanos se traducen en una vida feliz
        </h1>
        {/* TODO crear los links para navegar */}
        <div className="banner__buttons">
          {!token
             ? 
             (<> <button onClick={() => handlePage('login')} className="banner__button--left">
               Ingresar
             </button>
             <button onClick={() => handlePage('servicios')} className="banner__button--right button--large">Ver clases</button>
             </>)
             : <button onClick={() => handlePage('servicios')} className="banner__button--right button--large">Ver clases</button>

          }
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
