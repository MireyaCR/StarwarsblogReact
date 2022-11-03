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
        <div className="container-fluid">
            <div className="card  mx-5 mt-2 mb-2" >
                <div className="row mx-auto">
                    <strong>{location.state.type.toUpperCase()}</strong>
                </div>
                <div className="row g-0">                
                    <div class="col-md-4 p-2">
                        <img src={"https://starwars-visualguide.com/assets/img/"+location.state.typeImage+"/"+id+".jpg"} onError={(event)=>event.target.src=notfound} className="img-fluid rounded" alt="..."/>
                    </div>
                <div className="col-md-8 p-2">
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
                       <Link className="btn btn-primary btn-sm mx-5" to={"/"}>Home </Link> 
                    </div>
             </div>
         </div>
    </div>
</div>
    )
}
export default Detail;

