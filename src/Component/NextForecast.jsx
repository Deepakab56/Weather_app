import React from 'react';
import { Timeformater } from '../Utility/request';

function NextForecast(props) {
    const { data, moredetail } = props


    return (
        <>
            <div className="container-fluids  first-column rounded-2 mt-2 w-100">
                <h4 className=' p-1'>7-days Forecast</h4>
                <div className="d-flex flex-column align-items-center justify-content-center">

                    {

                        !moredetail ?
                            <>
                                {
                                    data?.forecast.forecastday.map((items, index) => (
                                        <div key={index} className='d-flex justify-content-around align-items-center w-100'>
                                            <span className='text-center'>{Timeformater(items.date)}</span>

                                            <span className='mt-2 text-center '><img src={items?.day.condition.icon} alt="" width={80} className='mt-2 mx-4' /></span>
                                            <h4 className='mt-1  text-center'>{items?.day.maxtemp_c}  / {items?.day.mintemp_c}  </h4>

                                            <hr className='text-dark' />
                                        </div>
                                    ))
                                }
                            </>
                            :
                            <>
                                {
                                    data?.forecast.forecastday.map((items, index) => (
                                        index < 5 ?
                                            <div key={index} className='d-flex justify-content-around align-items-center w-100'>
                                                <span className='text-center'>{Timeformater(items.date)}</span>

                                                <span className='mt-2 text-center '><img src={items?.day.condition.icon} alt="" width={80} className='mt-2 mx-4' /></span>
                                                <h4 className='mt-1  text-center'>{items?.day.maxtemp_c}  / {items?.day.mintemp_c}  </h4>

                                                <hr className='text-dark' />
                                            </div>
                                            :
                                            ""
                                    ))
                                }
                            </>
                    }

                </div>


            </div>
        </>
    );
}

export default NextForecast;