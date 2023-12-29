import React, { useCallback, useContext } from 'react';
import weather from '../Assets/pexels-ravi-kant-1715161.jpg'
import { useNavigate } from 'react-router-dom';
import searchContext from '../Context/SearchContext';


function Frontpage(props) {

    const{defaultdata} = useContext(searchContext)
    const navigate = useNavigate()
    const getstart=()=>{
         navigate("/headers")
         defaultdata()
}
    return (
        <div >
            <div className="contaier-fluids h-200   bg-primary text-white">
                <div className="row h-100 ">
                    <div className="col-lg-5 m-4  rounded-4 h-100 d-flex flex-column align-items-center justify-content-center first-column h-60"> 
                    <div className="d-flex h-60 rounded-4  m-4">
                        <img src={weather} alt="" className='img-fluid rounded  p-3 mt-2'  />
                    </div>
                    </div>
                    <div className="col-lg-4 offset-1 mt-4   d-flex flex-column align-items-center justify-content-center">
                   <p className='fs-2'>Weather App</p>

                    <button className="btn btn-primary mt-4" onClick={getstart}>Get Started</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontpage;