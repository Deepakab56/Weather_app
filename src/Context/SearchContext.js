import { createContext, useEffect, useState } from "react";
import { api_key } from "../Utility/request";
import { json } from "react-router-dom";


const searchContext = createContext()
export const SearchProvider = ({ children }) => {
    const[weatherdetail,setweatherdetail] = useState()
    const [moredetail,setmoredetail]= useState(false)


    const search = async (data) => {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4e74a0a73fa04c8b94255601232812&q=${data.name}&days=7&aqi=no&alerts=yes`, { method: "GET" })

        if (response.ok) {
            const user  = await response.json()
         console.log(user)
           if(Object.keys(user).length>0)
           {
            localStorage.removeItem("weather")
            setweatherdetail(user)
            
           }
          

        }
    }


    const defaultdata = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4e74a0a73fa04c8b94255601232812&q=kaithal&days=7&aqi=no&alerts=no`, { method: "GET" })
        if (response.ok) {
            const user = await response.json()
            localStorage.setItem("weather" , JSON.stringify(user))
          
 }
    }
   
    useEffect(()=>{
      defaultdata()
            
    })  

    return (
        <searchContext.Provider value={
            {
               search,
             weatherdetail,
             setweatherdetail,
             defaultdata,
             moredetail,setmoredetail
               



            }
        } >
            {children}
        </searchContext.Provider>
    )

}

export default searchContext