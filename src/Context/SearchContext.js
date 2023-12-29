import { createContext, useEffect, useState } from "react";
import { api_key } from "../Utility/request";


const searchContext = createContext()
export const SearchProvider = ({ children }) => {


    const search = async (data) => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4e74a0a73fa04c8b94255601232812&q={chandigarh}&aqi=yes`, { method: "GET" })

        if (response.ok) {

        }
    }


    const defaultdata = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4e74a0a73fa04c8b94255601232812&q=london&days=7&aqi=no&alerts=no`, { method: "GET" })
        if (response.ok) {
            const user = await response.json()
          localStorage.setItem("weather" , JSON.stringify(user))

        
           
           
        }
    }
   

    return (
        <searchContext.Provider value={
            {
                search,
             defaultdata
               



            }
        } >
            {children}
        </searchContext.Provider>
    )

}

export default searchContext