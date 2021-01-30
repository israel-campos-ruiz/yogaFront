import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { SEND_EMAIL_RECOVER_PASSWORD } from "../../helpers/mutations";

const RecoverPassword = () => {
 const [recoverPassword] =  useMutation(SEND_EMAIL_RECOVER_PASSWORD)
 const [showError, setShowError] = useState(null);
  const initialValues = {
    email: "",
  };

  const onSubmit = async ({ email }) => {
    try {
      await recoverPassword({
        variables:{
          input:{
            email
          }
        }
      });
      Swal.fire({
        icon: "success",
        text: `Enseguida te enviaremos un link a tu correo`,
        showCloseButton: true,
        timer: 1000,
      });
      console.log('enviado');
    } catch (error) {
      setShowError(error.message);
      setTimeout(() => {
        setShowError(null)
      }, 3000);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div className="container">
      <div className="login">
        <div className="login__content">
          <h2 className="login__title">Bienvenido a mediyoga</h2>

          <h3 className="login__subtitle">Recupera tu contraseña</h3>

          <form className="form" onSubmit={formik.handleSubmit}>
            <div className="form__container--input">
              <input
                className="form__input"
                placeholder="email"
                name={"email"}
                {...formik.getFieldProps("email")}
              />
            </div>
            {showError && (<span className="input__error">{showError}</span>)}
            <button className="btn--submit--create" type="submit">enviar</button>
            <NavLink className="link" exact to="/inicio">
              Regresa al inicio
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
