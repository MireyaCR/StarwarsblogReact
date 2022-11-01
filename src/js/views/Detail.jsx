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
            <div className="card mb-3" >
                <div className="row g-0 mx-auto">
                    <strong>{location.state.type.toUpperCase()}</strong>
                </div>
                <div className="row g-0">
                
                    <div class="col-md-4">
                        <img src={"https://starwars-visualguide.com/assets/img/"+location.state.typeImage+"/"+id+".jpg"} onError={(event)=>event.target.src=notfound} className="img-fluid rounded-start" alt="..."/>
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <ul ><h6> <strong>{detail.properties.name}</strong></h6>
                            {Object.keys(detail.properties).map((element,index)=>{
                            return (
                                <li >
                                    <small>{element} : {detail.properties[element]}</small>
                                </li>
                            )
                       })}
                       </ul>
                       <Link className="btn btn-primary btn-sm" to={"/"}>Home </Link> 
                    </div>
             </div>
         </div>
    </div>
</div>
    )
}
export default Detail;

