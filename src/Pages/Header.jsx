import React, { useContext } from 'react';
import Weathertodaydetails from '../Component/Weathertodaydetails';
import ColummData from '../Component/ColummData';
import searchContext from '../Context/SearchContext';

function Header(props) {
    const{user} = useContext(searchContext)
  
    
    return (
        <div>
            <ColummData data={user} />
            <Weathertodaydetails data={user}/>
            
        </div>
    );
}

export default Header;