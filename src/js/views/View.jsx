import React from "react";
import { useParams } from "react-router-dom";
const View= () =>{
    const {id}=useParams()
    return(
        <div>
            vista detallada de {id}
        </div>

    )
}
export default View;