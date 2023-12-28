export const api_key = '0d25518f368ff70e0a0eb8e44ea2fef9'


export const Timeformat=(data)=>{
    const time = new Date(data)
    return`
    ${time.toLocaleDateString()} 
    ${time.toLocaleTimeString()}
    `
}