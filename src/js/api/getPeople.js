const getPeople =async() =>{
    const data= await fetch("https://www.swapi.tech/api/people/")
    const{results}=await data.json()
    return results

}
export default getPeople;

fetch("https://www.swapi.tech/api/planets/1/")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))