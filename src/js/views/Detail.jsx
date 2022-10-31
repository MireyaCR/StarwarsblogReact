import { element, object } from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams} from "react-router-dom";
import notfound from "../../../public/assets/404.png";
import getDetail from "../api/getDetail";

const Detail= (props) =>{
    const [detail, setDetail]=useState({properties:{}});
    const location=useLocation();
    useEffect(()=>{
        getDetail(location.state.type,id).then(respuesta => {
            setDetail(respuesta)
          })    
          .catch(err => {
            console.error('ERROR',err)
          })
    },[])
    const {id} = useParams()
    return(
        <div>
            <h1>{location.state.type} {id} <strong>{detail.properties.name}</strong></h1>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <ul>
                       {Object.keys(detail.properties).map((element,index)=>{
                            return (
                                <li>
                                    {element} : {detail.properties[element]}
                                </li>
                            )
                       })}
                       </ul>
                   
                        <button href="#" type="button" className="btn btn-primary btn-sm float-start"><Link to={"/"}>Home</Link> </button>  

                    </div>
                    <div className="col-3">
                         <img src={"https://starwars-visualguide.com/assets/img/"+location.state.typeImage+"/"+id+".jpg"} onError={(event)=>event.target.src=notfound} className="rounded-circle img-fluid" style={{width: "18rem"}}/>
                     </div>
                 </div>
            </div>
        </div>
    )
}
export default Detail;