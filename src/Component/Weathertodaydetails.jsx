import React from 'react';
import { Timeformat } from '../Utility/request';

function Weathertodaydetails(props) {
    const{data} = props
    return (
        <div>
            <div className="container border w-50 bg-primary">
               <p className="bg-black text-white w-100 p-3"> {data?.location.name}  , As of  {Timeformat(data?.location.localtime) }  </p>
               <div className="details text-dark">
              <div className="d-flex align-items-center justify-content-between">
              <h1>{data?.current.temp_c} <sup></sup> C</h1>
              <img src={data?.current.condition.icon} alt="" width={150} />
              </div>
               <h1>{data?.current.condition.text}</h1>
               </div>
            </div>
        </div>
    );
}

export default Weathertodaydetails;