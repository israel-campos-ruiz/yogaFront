import React from "react";
import { Formik } from "formik";
import "../../styles/profile/ProfileEditForm.css";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../helpers/mutations";
import Swal from "sweetalert2";
const ProfileEditForm = ({ data, closeModal }) => {
 const [updateUser] = useMutation(UPDATE_USER)



  const onSubmit =  async({_id, nombre, email, edad}) => {
      try {
       await updateUser({
          variables:{
            id:_id,
            input:{
              nombre,
              email,
              edad
            }
          }
        })
        Swal.fire({
          icon:'success',
          title:'datos actualizados correctamente'
        })
        closeModal()
      } catch (error) {
        console.log(error);
      }   
  }

  return (
    <>

      <Formik
        enableReinitialize
        initialValues={data}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
           <>
            <form onSubmit={formik.handleSubmit} className="form__profile">
              <h3 className="form__title">Actualizar datos de {data.nombre}</h3>
              <div
                className={`input--profile 
            `}
              >
                <input
                  type="text"
                  className={`form__input ${"input__text__error"}`}
                  placeholder="ingresa tu nombre"
                  name={"nombre"}
                  {...formik.getFieldProps("nombre")}
                />
              </div>
              {formik.touched.nombre && formik.errors.nombre && (
                <span className="input__error">{formik.errors.nombre}</span>
              )}
              <div
                className={`input--profile ${
                  formik.touched.email && formik.errors.email && "errors"
                } `}
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

            
              <div className={`input--profile `}>
                <input
                  type="text"
                  className={`form__input`}
                  placeholder="ingresa tu edad"
                  name={"edad"}
                  {...formik.getFieldProps("edad")}
                />
              </div>
              {formik.touched.edad && formik.errors.edad && (
                <span className="input__error">{formik.errors.edad}</span>
              )}

                <div className="btn__container">
                <button className="btn btn--submit" type="submit">
                guardar cambios
              </button>
              <button className="btn btn--cancel" onClick={closeModal}>
                cancelar
              </button>
                </div>
       
            </form>
           
           </>
             
          );
        }}
      </Formik>
    </> 
  );
};

export default ProfileEditForm;
