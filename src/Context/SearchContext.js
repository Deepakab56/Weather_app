import { createContext, useEffect, useState } from "react";
import { api_key } from "../Utility/request";


const searchContext = createContext()
export const SearchProvider = ({ children }) => {
    const [data, setdata] = useState()

    const search = async (data) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.name}&appid=${api_key}`, { method: "GET" })

        if (response.ok) {
            const user = await response.json()
            setdata(user)
            console.log(user)

        }
    }


    const defaultdata=async()=>{
        const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99`, { method: "GET" })

        const user = await response.json()
       setdata(user)

    }

    useEffect(()=>{
        defaultdata()
    },[])
    return (
        <searchContext.Provider value={
            {
                search,
                data


            }
        } >
            {children}
        </searchContext.Provider>
    )

}

export default searchContext