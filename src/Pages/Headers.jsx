
import React, { useContext, useEffect, useState } from 'react';
import searchContext from '../Context/SearchContext';
import Weathertodaydetails from '../Component/Weathertodaydetails';
import TodayForcasest from '../Component/TodayForcasest';
import AirCondition from '../Component/AirCondition';
import Icons from '../Component/Icons';
import NextForecast from '../Component/NextForecast';

function Headers(props) {
   const[weatherdetail,setweatherdetail] = useState()
    const local = localStorage.getItem("weather")
   const weatherdata = JSON.parse(local)
//    console.log(weatherdata)
   

useEffect(()=>{
if(local)
{
    setweatherdetail(weatherdata)
   
}

},[local])




    return (
      <>
      <div className="container-fluids h-100 text-white bg-primary" >
        <div className="row">
            <div className="col-sm-1 m-2 mt-2  h-100 w-20">
            <div className="container mx-1 mt-2 d-flex flex-column justify-content-space-evenly align-items-center first-column menu-bar h-100  w-100">
                  <Icons/>
</div>
            </div>
            <div className="col-sm-7 mt-2 mx-2 w-70 h-100 ">

            <div className="container-fluids d-flex flex-column w-100 justify-content-center  align-items-center ">

                <div className="container-fluids text-center w-100">
                    <input type="text" name="" id="" className='w-100 rounded-2  first-column p-2 inp-border text-white' placeholder=' Search for Cities'/>
                    
                </div>
                    <div className="container-fluids  w-100    ">
                      <Weathertodaydetails data={weatherdetail}/>
                    </div>

    <div className="container-fluids w-100 m-2  rounded-2  first-column justify-content-start align-items-start">

             <TodayForcasest data={weatherdata}/>
                    </div>

                    <div className="container-fluids w-100 m-2 rounded-2 first-column justify-content-start align-items-start">
                      <AirCondition data={weatherdetail}/>
                    </div>

                </div>
            </div>
            <div className="col-sm-3 mx-4 mt-2 rounded-4 h-100 ">
            <div className="container d-flex flex-column mt-2 w-100 h-100   rounded-4 justify-content-start footer align-items-start first-column"> 
                
                <NextForecast data={weatherdetail}/>
               
                </div>

            </div>

        </div>
      </div>
      </>
    );
}

export default Headers;