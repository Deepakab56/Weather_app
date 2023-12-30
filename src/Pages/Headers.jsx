
import React, { useContext, useEffect, useState } from 'react';
import searchContext from '../Context/SearchContext';
import Weathertodaydetails from '../Component/Weathertodaydetails';
import TodayForcasest from '../Component/TodayForcasest';
import AirCondition from '../Component/AirCondition';
import Icons from '../Component/Icons';
import NextForecast from '../Component/NextForecast';

function Headers(props) {
  const { weatherdetail, setweatherdetail ,search ,moredetail,setmoredetail} = useContext(searchContext)
  const [formdata, setformdata] = useState(null)
  
  const local = localStorage.getItem("weather")
  const weatherdata = JSON.parse(local)
  


 

  const handlechange = (e) => {
    const { name, value } = e.target
    setformdata((prev) => ({
  ...prev,
      [name]: value
    }))
  }

  



const searchdata=(e)=>{
e.preventDefault()
if(formdata)
{
  search(formdata)
}
}


  return (
    <>
      <div className="container-fluids h-100 text-white bg-primary" >
        <div className="row">
          <div className="col-sm-1 m-2 mt-2   w-20">
            <div className="container mx-1 mt-2 d-flex flex-column justify-content-space-evenly align-items-center first-column menu-bar h-100  w-100">
              <Icons moredetail = {setmoredetail} />
            </div>
          </div>
          <div className="col-sm-7 mt-2 mx-2 w-70 h-100 ">

            <div className="container-fluids d-flex flex-column w-100 justify-content-center  align-items-center ">

              <div className="container-fluids text-center w-100">
                <input type="text" name="name" id="" className='w-75 rounded-2  first-column p-2 inp-border text-white' placeholder=' Search for Cities' onChange={handlechange} />
                <button className="btn btn-primary mx-2 rounded-2" onClick={searchdata} >Search</button>

              </div>
              <div className="container-fluids  w-100    ">
                <Weathertodaydetails data={weatherdetail ? weatherdetail : weatherdata} moredetail = {moredetail} />
              </div>

              <div className="container-fluids w-100 m-2  p-2 rounded-2  justify-content-start align-items-start">
 
 {
  !moredetail ?  <TodayForcasest data={weatherdetail ? weatherdetail : weatherdata} /> :""
 }
               
              </div>

              <div className="container-fluids w-100  mt-2 rounded-2 first-column justify-content-start align-items-start">
              {
                ! moredetail ?    <AirCondition data={weatherdetail ? weatherdetail : weatherdata}  /> : ""
              }
               
              </div>

            </div>
          </div>
          <div className="col-sm-3  mt-2 rounded-4  w-20 ">
            <div className="container d-flex flex-column mt-2 w-100 h-75   rounded-4 justify-content-start footer align-items-start ">

             {
              ! moredetail  ?
              <NextForecast data={weatherdetail ? weatherdetail : weatherdata} /> :
               
            <>
              <TodayForcasest data={weatherdetail ? weatherdetail : weatherdata} moredetail ={moredetail} /> 
              <NextForecast data={weatherdetail ? weatherdetail : weatherdata} moredetail ={moredetail} /></>
             }

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Headers;