import React from 'react'
import '../../styles/shared/IconMenu.css'
export const IconMenu = ({id}) => {
  
    return (
        <div className="icon" id={`${id}`}>
            <div className="bar1"></div>
            <div className="bar3"></div>
        </div>
    )
}

export const CloseIconMenu = () => {
    return(
        <div>
        <div className="x1"></div>
        <div className="bar2"></div>
        <div className="x2"></div>
        </div>   
    )
}   

