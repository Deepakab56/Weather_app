import { createContext, useEffect, useState } from "react";
import { api_key } from "../Utility/request";


const searchContext = createContext()
export const SearchProvider = ({ children }) => {
    const [user, setuser] = useState()

    const search = async (data) => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4e74a0a73fa04c8b94255601232812&q={chandigarh}&aqi=yes`, { method: "GET" })

        if (response.ok) {

        }
    }


    const defaultdata = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4e74a0a73fa04c8b94255601232812&q=chandigarh&days=1&aqi=yes&alerts=yes`, { method: "GET" })
        if (response.ok) {
            const user = await response.json()
          localStorage.setItem("weather" , JSON.stringify(user))

            setuser(user)
           
           
        }
    }
   

    return (
        <searchContext.Provider value={
            {
                search,
                user,
                defaultdata,



            }
        } >
            {children}
        </searchContext.Provider>
    )

}

export default searchContext