import React from 'react';
import { Timeformat } from '../Utility/request';

function TodayForcasest(props) {
    const { data } = props
    const { alert, current, forecast, location } = data
    const { forecastday } = forecast
    const {hour} = forecastday[0]


    const str = new Date()
    const time = str.getTime()/1000
    const time_format = Math.round(time.toFixed())
    
   
    
    return (
        <div>
            <span className='text-secondary'>Today's Forecast</span>
            <div className="d-flex justify-content-center align-items-center m-4 text-white ">

{
    hour?.map((items,index)=>(
      
        items?.time_epoch >time_format ?
        <>
         <div className="d-flex">
         <span className='mx-2 fa-5'>{Timeformat(items?.time)}</span>
         </div>
        
        
       </>
       

        : ""
       

    ))
}
               


            </div>
        </div>
    );
}

export default TodayForcasest;