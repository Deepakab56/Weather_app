import React from 'react';
import { Timeformat } from '../Utility/request';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

function Weathertodaydetails(props) {
    const{data} = props
    return (
        <div>
           <div className="container-fluids w-100  rounded-4 mt-4">
            <div className="d-flex justify-content-between   align-items-center">
                <div className="d-flex flex-column  justify-content-between   align-items-center">
                    <div className="name">
                   <h4 className='mt-2 text-center fw-bold'> {data?.location.name} </h4>
                   <span className='text-center mx-2  fw-bold'> Chance of Rain {data?.current.cloud}%</span>
                    </div>

               <div className="temp mt-4">
               <h1 className='fw-bold'>{data?.current.temp_c} <sup>&#176;</sup> </h1>
               </div>
                </div>
                <div className="d-flex">
                <img src={data?.current.condition.icon} alt="" width={150} />
                </div>
            </div>
           </div>
        </div>
    );
}

export default Weathertodaydetails;