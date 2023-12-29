import React from 'react';
import { Timeformat } from '../Utility/request';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

function TodayForcasest(props) {
    const { data } = props
    const { alert, current, forecast, location } = data
    const { forecastday } = forecast
    const {hour} = forecastday[0]

    
    


    const str = new Date()
    const time = str.getTime()/1000
    const time_format = Math.round(time.toFixed())
    console.log(time_format)
    
   
    
    return (
        <div>
            <span className='fw-bold'>Today's Forecast</span>
            <div className="d-flex justify-content-between align-items-center m-1 text-white ">

{
   hour?.filter(items => items?.time_epoch > time_format).slice(0, 5).map((items, index) => (
    <div key={index} className="d-flex flex-column border-right justify-content-center align-items-center m-1 text-white">
      <span className='mx-2 fs-5 '>{Timeformat(items?.time)}</span>
      <span className='mt-2 text-center'><img src={items?.condition.icon} alt="" width={80} className='mt-2' /></span>
      <span className='fw-bold'>{data?.current.temp_c} <sup className='fs-5'>&#176;</sup></span>
    </div>
  ))
}
               


            </div>
        </div>
    );
}

export default TodayForcasest;