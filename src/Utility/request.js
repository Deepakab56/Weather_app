export const api_key = '4e74a0a73fa04c8b94255601232812'


export const Timeformat=(data)=>{
    const time = new Date(data)
    return`
   
    ${time.toLocaleString("en-US", {hour: 'numeric', minute: 'numeric', hour12: true})}
    `
}


export const Timeformater=(data)=>{
    const day = new Date(data)
    const weekdata = day.getDay()

    const week = ["Sun" ,"Mon","Tue" ,"Wed" , "Thu" ,"Fri" ,"Sat"]

    return week[weekdata]
    
    
}