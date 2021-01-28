import React, {useContext} from "react";
import "../../styles/dashboard/About.css";
import imgAbout from "../../assets/img/aboutus.png";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const About = () => {
  const context = useContext(AuthContext)
  const history = useHistory()
  const token = context.auth?.token
  const handleLogin = () => {
      history.push('/login')
  }
  return (
    <div className="about">
      <div className="about__content">
        <div
          className="about__image"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundImage: `url(${imgAbout})`,
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="about__description">
          <h4 className="about__header">CONÓCENOS</h4>
          <h4 className="about__title">LLeva tu yoga al siguiente nivel</h4>
          <p className="about__text">En mediyoga nos lo más importante eres tú
          es por eso que nos enfocamos en sacar el máximo provecho en cada clase 
          y tengas el beneficio de tener una vida más saludable 
          </p>
          <br/>
          <p className="about__text">Contamos con profesionales en el deporte y próximamente
          en nutrición así que no lo pienses más. 
          </p>
          {
            !token &&
            <button onClick={handleLogin}  className="about--btn">¡Únete!</button>

          }
        </div>
      </div>
    </div>
  );
};

export default About;
