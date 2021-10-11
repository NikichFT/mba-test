export const fetchData = async () =>{
    const data = await fetch('https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses')
    return await data.json()
} 