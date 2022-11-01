import Card from "../component/Card.jsx";
import React,{useState,useEffect} from "react";
import getLista from "../api/getLista.js";



const Home=()=> {
  const [personajes, setPersonajes]=useState([])
  const [naves,setNaves]=useState([])
  const [planets,setPlanets]=useState([])
 
  useEffect(()=>{
    getLista('people').then(respuesta => {
      setPersonajes(respuesta)
    })    
    .catch(err => {
      console.error('ERROR',err)
    })
    getLista('starships').then(respuesta => {
      setNaves(respuesta)
    })    
    .catch(err => {
      console.error('ERROR',err)
    })
    getLista('planets').then(respuesta => {
      setPlanets(respuesta)
    })    
    .catch(err => {
      console.error('ERROR',err)
    })
  }, [])
  return(
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-6 g-6 mx-5 mb-5">
          
                    {personajes.map((element,index)=>{
                      return (
                        <Card key={index} name={element.name} uid={element.uid} typeImage={'characters'} type={'people'}/>
                      )
                    })}          
            </div>   
            <div className="row row-cols-1 row-cols-md-6 g-6 mx-5 mb-5">
                    {naves.map((element,index)=>{
                      return (
                        <Card key={index} name={element.name} uid={element.uid} typeImage={'starships'} type={'starships'}/>
                      )
                    })}                                                                       
              </div>
              <div className="row row-cols-1 row-cols-md-6 g-6 mx-5 mb-5">
                    {planets.map((element,index)=>{
                      return (
                        <Card key={index} name={element.name} uid={element.uid} typeImage={'planets'} type={'planets'}/>
                      )
                    })}                                                                       
              </div> 
          </div>
  )
}
export default Home;
