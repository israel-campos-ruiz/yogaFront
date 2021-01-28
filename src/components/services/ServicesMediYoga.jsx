import React from "react";
import "../../styles/services/ServicesMediYoga.css";
import Cards from "../../components/shared/Cards";

const ServicesMediYoga = ({ data: { getClases: clases } }) => {
  return (
    <div className="services">
      <div className="services__contents">
        <h4 className="services__subtitle">¿Listo para el cambio?</h4>
        <h2 className="services__title">Nuestros servicios</h2>
        <div className="services__cards--flex">
          {clases.map((clase) => (

            
            <Cards
              key={clase._id}
              img={clase.img}
              title={clase.nombre}
              description={clase.descripcion}
              instructor={clase.nombreProfesor}
              id={clase._id}
              showBtn
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMediYoga;
