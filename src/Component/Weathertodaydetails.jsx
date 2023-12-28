import React from 'react';
import { Timeformat } from '../Utility/request';

function Weathertodaydetails(props) {
    const{data} = props
    return (
        <div>
            <div className="container border">
               <p className="bg-black text-white w-100 p-3">{data?.name} , As of  </p>
               <div className="details">
                <p>{Timeformat(data?.dt)}</p>
               </div>
            </div>
        </div>
    );
}

export default Weathertodaydetails;