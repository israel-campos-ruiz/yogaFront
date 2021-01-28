import { useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { DELETE_USER_CLASS } from "../../helpers/mutations";
import "../../styles/profile/ContentProfile.css";
import Modal from "../shared/Modal";
import ProfileEditForm from "./ProfileEditForm";

const ContentProfile = ({ data }) => {

  const { getClient } = data;
  const { nombre, email, edad, clase, } = getClient;
  const [modalOpened, setModalOpened] = useState(false);
  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  useEffect(() => {
  }, [data])


  const [deleteUserClass] = useMutation(DELETE_USER_CLASS)
  
  const handleDelete = ({ _id }) => {
    
    Swal.fire({
      title: "¿Quieres darte de baja?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f95964",
      cancelButtonColor: "#0B2E4E",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar",
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        deleteUserClass({
          variables:{
              id: getClient._id,
              _idClass:_id
          }
        }).then()
        Swal.fire({
          icon: "success",
          title: "Te diste de baja correctamente",
        });
       
      }
    });
  };
  return (
    <>
      {modalOpened && (
        <Modal modalOpened={modalOpened}>
          <ProfileEditForm data={getClient} closeModal={closeModal} />
        </Modal>
      )}
      <button>editar</button>
      <div className="profile">
        <div className="profile__container">
          <button onClick={openModal} className="btn--edit">
            editar
          </button>
          <h3 className="profile__name">Nombre: {nombre}</h3>
          <h3 className="profile__email">Email: {email}</h3>
          <h3 className="profile__edad">edad:{edad}</h3>
          <h3 className="profile__clases">
            Numero de clases inscrito:{clase.length}
          </h3>
        </div>
      </div>

      <div className="clases">
        {clase.map((c) => (
          <div key={c._id} className="clases__container">
            <div className="clases__profile">
              <h2>{c.nombre}</h2>
              <p>9-15</p>
              <p>{c.descripcion}</p>
              <span>{c.nombreProfesor}</span>
              <span>{c.__typename}</span>
            </div>

            <div className="clases__profile--delete">
              <button onClick={() => handleDelete(c)} className="btn--profile">
                Eliminar clase
              </button>
            </div>
          </div>
        ))}
      </div>

      {clase.length === 0 && (
        <h3 className="message">
          no estas inscrito en ninguna clase actualmente
        </h3>
      )}
    </>
  );
};

export default ContentProfile;
