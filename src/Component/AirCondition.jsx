import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faDroplet, faTemperatureQuarter, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import searchContext from '../Context/SearchContext';

function AirCondition(props) {
    const { data } = props
    const { moredetail, setmoredetail } = useContext(searchContext)

    const changedetail = () => {
        setmoredetail(true)
    }

    return (
        <>
         

                    <div className="container-fluids w-100 first-column  rounded-4 ">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="d-flex flex-column justify-content-center align-items-center mt-2">
                                    <div className="heading fw-bold fs-4 ">Air Conditions</div>
                                    <div className="text-center">

                                        <h5 className='fw-bold mt-4'>  <FontAwesomeIcon icon={faTemperatureQuarter}>
                                        </FontAwesomeIcon> Feel like </h5>
                                        <h4 className='fw-bold mt-1'>{data?.current.feelslike_c}  <sup>&#176;</sup> </h4>
                                    </div>

                                    <div className="text-center">
                                        <h5 className='fw-bold mt-4'> <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon>   Chance of Rain </h5>
                                        <h4 className='fw-bold mt-1'>{data?.current.cloud}  % </h4>

                                    </div>


                                </div>
                            </div>
                            <div className="col-sm-5 offset-1">
                                <div className="text-end"><button className="btn btn-primary  mt-1 rounded-4 " onClick={changedetail}> See More </button></div>

                                <div className="d-flex flex-column justify-content-center align-items-center mt-2">

                                    <div className="text-center">

                                        <h5 className='fw-bold mt-4'>  <FontAwesomeIcon icon={faWind}>
                                        </FontAwesomeIcon> Wind </h5>
                                        <h4 className='fw-bold mt-1'>{data?.current.wind_kph}  km/h </h4>
                                    </div>

                                    <div className="text-center">
                                        <h5 className='fw-bold mt-4'> <FontAwesomeIcon icon={faSun}></FontAwesomeIcon> Uv Index </h5>
                                        <h4 className='fw-bold mt-1'>{data?.current.uv}  </h4>


                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                  

        </>
    );
}

export default AirCondition;    