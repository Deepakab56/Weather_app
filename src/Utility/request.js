export const api_key = '4e74a0a73fa04c8b94255601232812'


export const Timeformat=(data)=>{
    const time = new Date(data)
    return`
   
    ${time.toLocaleTimeString()}
    `
}