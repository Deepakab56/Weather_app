import React from 'react';
import { Timeformater } from '../Utility/request';

function NextForecast(props) {
    const { data } = props
   

    return (
        <div>
            <div className="container-fluids h-100">
                <h4 className=' p-1'>7-days Forecast</h4>
                <div className="d-flex flex-column align-items-center justify-content-center mt-2">

                    {
                        data?.forecast.forecastday.map((items, index) => (
                            <div key={index} className='d-flex justify-content-evenly align-items-center'>
                                <span className='text-center'>{Timeformater(items.date)}</span>

                                <span className='mt-2 text-center mx-1'><img src={items?.day.condition.icon} alt="" width={80} className='mt-2 mx-4' /></span>
                                <h4 className='mt-1 '>{items?.day.maxtemp_c}  / {items?.day.mintemp_c}  </h4>

                                <hr />
                            </div>
                        ))
                    }

                </div>


            </div>
        </div>
    );
}

export default NextForecast;