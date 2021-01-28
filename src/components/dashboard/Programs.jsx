import React from 'react'
import Cards from '../shared/Cards'
import "../../styles/dashboard/Programs.css";

const Programs = () => {    
    return (
        <div className="programs">  
         {/* <div className="programs">   */}
            <div className="programs__contents">
                <h5 className="programs__title">próximos programas</h5>
                <h5 className="programs__subTitle">Meditación, Yoga, Bienestar</h5>
                <h5 className="programs__subTitle"> & muchos más</h5>
                {/* TODO crear las cards no son dinamicas ya que solo es información plana */}
                    <div className="programs__cards--flex">
    
                        <Cards 
                            img={'fjf'} 
                            title={'Mindfulnes training'} 
                            description={'let us take you to a different level of inner strength with our future sessions'} 
                            instructor={'Coming soon'}
                    
                         />
                        <Cards 
                            img={'fjf'} 
                            title={'Nutrition'} 
                            description={'let us take you to a different level of inner strength with our future sessions'} 
                            showBtn={false}
                            instructor={'Coming soon'}
                        />
                        <Cards 
                            img={'fjf'} 
                            title={'workout rutines'} 
                            description={'let us take you to a different level of inner strength with our future sessions'} 
                            instructor={'Coming soon'}
                        />
                      
                    </div>
            </div>
        </div>
    )
}

export default Programs
