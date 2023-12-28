import React, { useContext } from 'react';
import Weathertodaydetails from '../Component/Weathertodaydetails';
import ColummData from '../Component/ColummData';
import searchContext from '../Context/SearchContext';

function Header(props) {
    const{data} = useContext(searchContext)
   
    
    return (
        <div>
            <ColummData data={data} />
            <Weathertodaydetails data={data}/>
            
        </div>
    );
}

export default Header;