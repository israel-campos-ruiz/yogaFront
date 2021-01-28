import React, { useEffect, useContext} from 'react'
import { useQuery } from '@apollo/client';
import { AuthContext } from "../context/AuthContext";
import ContentProfile from '../components/profile/ContentProfile'
import { resetScroll } from '../helpers/resetScroll'
import { GET_CLIENT } from '../helpers/querys';
import Loader from '../components/shared/Loader';

const Profile = () => {
    const context = useContext(AuthContext)
    const id = context?.auth.client?._id
    const {loading, error , data, startPolling, stopPolling } = useQuery(GET_CLIENT, {
        variables:{
            input:id
        },
    })
    useEffect(() => {
        resetScroll()
    }, [])

    useEffect(() => {
       startPolling(100)
       return () => stopPolling()
    }, [startPolling, stopPolling])

     
    return (
      <div>
          {loading && <Loader/>}
          {data && data && (
              <ContentProfile data={data}/>
          )}
          {error && <div>no se encontro el contenido</div>}
      </div>  
    )
}

export default Profile
