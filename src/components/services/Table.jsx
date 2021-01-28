import React from "react";
import "../../styles/services/Table.css";
const Table = ({ data: { getClases: clases } }) => {
  return (
    <div className="table">
      <h3 className="table__title">Horarios</h3>
      <table id="table" className="table__classes">
        <tbody>
          {clases.map((clase) => (
            <tr key={clase._id}>
              <th scope="row">{clase.nombre}</th>
              <td>{clase.descripcion}</td>
              <td>horario 9-15</td>
              <td>{clase.nombreProfesor}</td>
              <td>{clase.__typename}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
