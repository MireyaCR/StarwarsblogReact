import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams} from "react-router-dom";
import notfound from "../../../public/assets/404.png";
import getDetail from "../api/getDetail";

const Detail= (props) =>{
    const [detail, setDetail]=useState({});
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
        <div>vista detallada de {id} {}
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <h2>Nombre</h2>            
                        {/* <div><ul>renderizar li</ul></div>    */}
                        <button href="#" type="button" className="btn btn-primary btn-sm float-start"><Link to={"/"}>Home</Link> </button>  

                    </div>
                    <div class="col-3">
                        {/* <img src="" className="rounded-circle img-fluid" style="width: 18rem;"/> */}
                     </div>
                 </div>
            </div>
        </div>
    )
}
export default Detail;