import React, { useContext, useState } from 'react';
import searchContext from '../Context/SearchContext';

function Navbar(props) {
    const [formdata, setformdata] = useState()
    const{search} = useContext(searchContext)
    const handleChange = (e) => {
        const { name, value } = e.target
        setformdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }
  
    const searchdetail=(e)=>{
        e.preventDefault()
        search(formdata)
}
    return (
        <div>
            <nav class="navbar navbar-expand-lg  bg-transparent">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Weather</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <form class="d-flex ms-auto" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search City" name="name" aria-label="Search" onChange={handleChange} />
                            <button class="btn btn-outline-success" type="submit" onClick={searchdetail}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;