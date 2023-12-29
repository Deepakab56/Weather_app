import React from 'react';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCity, faCloud, faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icons(props) {
    return (
        <div>
            <div className="weather icons mb-4">
                <FontAwesomeIcon icon={faCloud} className='fs-3'></FontAwesomeIcon>
            </div>
            <div className="weather icons text-center mb-4">
                <FontAwesomeIcon icon={faCloudSunRain} className='fs-3'></FontAwesomeIcon>
                <p className="fs-5">Weather</p>

            </div>
            <div className="cities icons text-center">
                <FontAwesomeIcon icon={faCity}></FontAwesomeIcon>
                <p className="fs-5">cities</p>
            </div>
            <div className="maps icons text-center mb-4">
                <FontAwesomeIcon icon={faMap}></FontAwesomeIcon>
                <p className="fs-5">Maps</p>
            </div>

            <div className="setting icons text-center mb-4">
                <FontAwesomeIcon icon={faBars}> </FontAwesomeIcon>
                <p className="fs-5">setting</p>
                </div>
                <div className="setting icons text-center mb-4">
                <FontAwesomeIcon icon={faBars}> </FontAwesomeIcon>
                <p className="fs-5">setting</p>
                </div>

        </div>
    );
}

export default Icons;