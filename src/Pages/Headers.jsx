import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCity, faCloud, faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import searchContext from '../Context/SearchContext';
import Weathertodaydetails from '../Component/Weathertodaydetails';
import TodayForcasest from '../Component/TodayForcasest';

function Headers(props) {
   
    const local = localStorage.getItem("weather")
   const weatherdata = JSON.parse(local)
   console.log(weatherdata)

    return (
      <>
      <div className="container-fluids h-100 text-white bg-primary" >
        <div className="row">
            <div className="col-sm-1 m-2">
            <div className="container mx-1 mt-2 d-flex flex-column justify-content-space-evenly align-items-center first-column menu-bar ">
                    <div className="weather icons">
                       <FontAwesomeIcon icon={faCloud} className='fs-3'></FontAwesomeIcon>
                    </div>
                    <div className="weather icons text-center">
                    <FontAwesomeIcon icon={faCloudSunRain} className='fs-3'></FontAwesomeIcon>
                    <p className="fs-5">Weather</p>
                        
                    </div>
                    <div className="cities icons text-center">
                    <FontAwesomeIcon icon={faCity}></FontAwesomeIcon>
                        <p className="fs-5">cities</p>
                    </div>
                    <div className="maps icons text-center">
                        <FontAwesomeIcon icon={faMap}></FontAwesomeIcon>
                        <p className="fs-5">Maps</p>
                    </div>

                    <div className="setting icons text-center">
                        <FontAwesomeIcon icon={faBars}> </FontAwesomeIcon>
                        <p className="fs-5">setting</p></div>



                </div>
            </div>
            <div className="col-sm-8 mt-4">

            <div className="container-fluids d-flex flex-column w-100 justify-content-center mx-4  align-items-center ">

                <div className="container-fluids text-center w-100">
                    <input type="text" name="" id="" className='w-75  first-column p-2 inp-border text-white' placeholder=' Search for Cities'/>
                    
                </div>
                    <div className="container-fluids  w-75  middle-box  ">
                      <Weathertodaydetails data={weatherdata}/>
                    </div>

    <div className="container-fluids w-75 m-2  rounded-2  first-column justify-content-start align-items-start">

             <TodayForcasest data={weatherdata}/>
                    </div>

                    <div className="container-fluids w-75 m-2 border  first-column justify-content-start align-items-start">
                      
                    </div>

                </div>
            </div>
            <div className="col-sm-2">
            <div className="container d-flex flex-column justify-content-start footer align-items-start first-column"> 
                
                
               
                </div>

            </div>

        </div>
      </div>
      </>
    );
}

export default Headers;