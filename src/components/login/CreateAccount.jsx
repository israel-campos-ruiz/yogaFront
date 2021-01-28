import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { INSERT_USER } from "../../helpers/mutations";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import client  from '../../apollo/client'
import "../../styles/login/CreateAccount.css";

const CreateAccount = ({ changeToLogin }) => {
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(null);
  const [createClient] = useMutation(INSERT_USER,{client});

  //useFormik values
  const initialValues = {
    nombre: "",
    email: "",
    edad: "",
    password: "",
    telefono: "",
  };
  const validate = (values) => {
    let errors = {};
    if (!values.nombre) {
      errors.nombre = "Upss... olvidaste tu ingresar tu nombre";
    } else if (!/^[a-zA-Z\s]*$/.test(values.nombre)) {
      errors.nombre = "Oye no puedes ingresar numeros en tu nombre";
    }
    if (!values.email) {
      errors.email = "Upss... olvidaste ingresar tu email intenta de nuevo";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      errors.email = "Ese email es invalido prueba de nuevo";
    }
    if (values.edad < 18) {
      errors.edad = "Debes de tener 18 años mínimo :c";
    }
    return errors;
  };
  const onSubmit = async ({ nombre, email, edad, password }) => {
    //TODO crear la logica en el page no aquí
    try {
       await createClient({
        variables: {
          input: {
            nombre,
            email,
            edad,
            password,
          },
        },
      });
      
      Swal.fire({
        title: `Hola ${nombre} 💚`,
        text: `El día de hoy empiezas tu viaje de relajación`,
        icon: "success",
        showCloseButton: true,
        timer: 2000,
      });
      changeToLogin();
    } catch (error) {
      setShowMessage(error.message);
    }
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });
  const handleSee = () => setVisibilityPassword(!visibilityPassword);
  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div
          className={`form__container--input ${
            formik.touched.nombre && formik.errors.nombre && "errors"
          }`}
        >
          <input
            type="text"
            className={`form__input ${
              formik.touched.nombre &&
              formik.errors.nombre &&
              "input__text__error"
            }`}
            placeholder="ingresa tu nombre"
            name={"nombre"}
            {...formik.getFieldProps("nombre")}
          />
        </div>
        {formik.touched.nombre && formik.errors.nombre && (
          <span className="input__error">{formik.errors.nombre}</span>
        )}
        <div
          className={`form__container--input ${
            formik.touched.email && formik.errors.email && "errors"
          } ${formik.touched.email && showMessage && "errors"} `}
        >
          <input
            type="text"
            className={`form__input ${
              formik.touched.email &&
              formik.errors.email &&
              "input__text__error"
            }`}
            placeholder="ingresa tu email"
            name={"email"}
            {...formik.getFieldProps("email")}
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <span className="input__error">{formik.errors.email}</span>
        )}

        {formik.touched.email && showMessage && (
          <span className="input__error">{showMessage}</span>
        )}
        <div
          className={`form__container--input ${
            formik.touched.edad && formik.errors.edad && "errors"
          }`}
        >
          <input
            type="text"
            className={`form__input ${
              formik.touched.edad && formik.errors.edad && "input__text__error"
            }`}
            placeholder="ingresa tu edad"
            name={"edad"}
            {...formik.getFieldProps("edad")}
          />
        </div>
        {formik.touched.edad && formik.errors.edad && (
          <span className="input__error">{formik.errors.edad}</span>
        )}
        <div
          className={`form__container--input ${
            formik.touched.telefono && formik.errors.telefono && "errors"
          }`}
        >
          <input
            type="text"
            className={`form__input ${
              formik.touched.telefono &&
              formik.errors.telefono &&
              "input__text__error"
            }`}
            name={"telefono"}
            placeholder="ingresa tu teléfono"
            {...formik.getFieldProps("telefono")}
          />
        </div>

        <div
          className={`form__container--input ${
            formik.touched.password && formik.errors.password && "errors"
          }`}
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
        </div>
        <button className="btn--submit--create" type="submit">
          Crear cuenta
        </button>
        <p type="button" className="btn--link link" onClick={changeToLogin}>
          ¿Ya tienes una cuenta? ¡ingresa ahora!
        </p>
        <NavLink className="link" exact to="/inicio">
          Regresa al inicio
        </NavLink>
      </form>
    </>
  );
};

export default CreateAccount;
