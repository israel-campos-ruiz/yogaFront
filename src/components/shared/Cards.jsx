import React, { useContext } from "react";
import "../../styles/shared/Cards.css";
import IMGTEST from "../../assets/img/banner.jpg";
import { useCountWords } from "../../hooks/useCountWords";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useMutation } from "@apollo/client";
import { NOTIFY_USER } from "../../helpers/mutations";
import Swal from "sweetalert2";
const Cards = ({ id, img, title, description, instructor, showBtn }) => {
  const context = useContext(AuthContext)
  const history = useHistory()
  const {word} = useCountWords(description)
  const token = context.auth?.token

  const [authenticateUser] = useMutation(NOTIFY_USER, {
    context:{headers:{authorization:token}}
   
  },
  
  )
  const handleClick = async () => {
    if(!token ) return history.push('/login')
    try {
      const {data} =   await authenticateUser({
         variables:{
           input:{
             clase:id
           }
         }
       })
       const {nombre} = data.notifyUserAndAddClass
       Swal.fire({
         icon:'success',
         title:`Hola ${nombre}`,
         text:'Te registraste correctamente a tu clase',
         footer:'Pronto te enviaremos un sms de confirmación'
       });
      
    } catch (error) {
        
        Swal.fire({
          icon:'question',
          title:`${error.message}`
        })
     
    }
  };
  return (
    <div className="card">
      <div className="card__body">
        <img src={IMGTEST} alt={title} className="card__image" />
        <h2 className="card__title">{title}</h2>
        <div>
          {(word > 8 )
          
          ? <p className="card__description">{description}</p> 
          : <p className="card__description" style={{marginBottom:"38px"}}>{description}</p> 
        }
          <hr className="card--line" />
          <div className="card__footer">
            <h4 className="card__description--instructor">{instructor}</h4>
            {showBtn && (
              <button onClick={handleClick} className="card__body--btn">
                apuntate!!
              </button>
            )}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Cards;
