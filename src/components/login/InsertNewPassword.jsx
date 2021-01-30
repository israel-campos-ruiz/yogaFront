import React, { useState } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { INSERT_NEW_PASSWORD_TOKEN } from "../../helpers/mutations";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

 
const InsertNewPassword = () => {
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const [showError, setshowError] = useState(null)
  const [ insertNewPassword ] = useMutation(INSERT_NEW_PASSWORD_TOKEN)
  const history = useHistory();
  const {token} = useParams();

  const initialValues = {
    password: "",
  };
  const onSubmit = async ({ password }) => {
    try {
    const {data} = await  insertNewPassword({
          variables:{
              input:{
                  password,
                  token
              }
          }
      })
      
      Swal.fire({
          icon:'success',
          text:`${data.insertNewPassword.message}`
      });
      history.push("/login")

    } catch (error) {
        setshowError(error.message)
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  const handleSee = () => setVisibilityPassword(!visibilityPassword);

  return (
    <div className="container">
      <div className="login">
        <div className="login__content">
          <h2 className="login__title">Bienvenido a mediyoga</h2>

          <h3 className="login__subtitle">Recupera tu contraseña</h3>

          <form className="form" onSubmit={formik.handleSubmit}>
            <div className="form__container--input">
              <input
                type={visibilityPassword ? "text" : "password"}
                className={`form__input ${
                  formik.touched.password &&
                  formik.errors.password &&
                  "input__text__error"
                }`}
                name={"password"}
                placeholder="ingresa tu nueva contraseña"
                {...formik.getFieldProps("password")}
              />
              {visibilityPassword ? (
                <i onClick={handleSee} className="fa fa-eye"></i>
              ) : (
                <i onClick={handleSee} className="fa fa-eye-slash"></i>
              )}
            </div>

            {showError}

            <button className="btn--submit--create" type="submit">
              enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InsertNewPassword;
