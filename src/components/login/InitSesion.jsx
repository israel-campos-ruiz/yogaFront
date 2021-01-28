import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AUTHENTICATE_USER } from "../../helpers/mutations";
import { getFromLocalStorage, saveLocalStorage } from "../../helpers/storage";
import { AuthContext } from "../../context/AuthContext";
// import Swal from "sweetalert2";
// import { sweetAlertImg } from "../../utils/utils";
import client from "../../apollo/client"

const InitSesion = ({ changeToCreateAccount }) => {
  const [authenticateUser] = useMutation(AUTHENTICATE_USER, {client});
  const [showErrorLogin, setShowErrorLogin] = useState(null)
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const context = useContext(AuthContext);
  const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async ({ email, password }) => {
     try {
      const { data } = await authenticateUser({
        variables: {
          input: {
            email,
            password,
          },
        },
      });
      saveLocalStorage("auth", data.authenticateUser);
     context?.setAuth(getFromLocalStorage("auth"));
      history.push("/inicio");
     } catch (error) {
       console.log(error.message);
       setShowErrorLogin(error.message)
     }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  const handleSee = () => setVisibilityPassword(!visibilityPassword);
  return (
    <>
     
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form__container--input">
          <input
            className="form__input"
            placeholder="email"
            name={"email"}
            {...formik.getFieldProps("email")}
          />
        </div>
        <div
          className={`form__container--input ${showErrorLogin && "errors"}`}
        >
          <input
            type={visibilityPassword ? "text" : "password"}
            className={`form__input ${
              formik.touched.password &&
              formik.errors.password &&
              "input__text__error"
            }`}
            name={"password"}
            placeholder="ingresa tu contraseña"
            {...formik.getFieldProps("password")}
          />
          {visibilityPassword ? (
            <i onClick={handleSee} className="fa fa-eye"></i>
          ) : (
            <i onClick={handleSee} className="fa fa-eye-slash"></i>
          )}

    {showErrorLogin && (
          <span className="input__error">{showErrorLogin}</span>
        )}
        </div>
        <button className={`btn--submit--create ${showErrorLogin && "mt"} `} type="submit">
          Iniciar sesion
        </button>
        <p  className="btn--link link" onClick={changeToCreateAccount}>
          ¿No tienes una cuenta? ¡Registrate ahora!
        </p>
        <NavLink className="link" exact to="/inicio">
          Regresa al inicio
        </NavLink>
      </form>
    </>
  );
};

export default InitSesion;
