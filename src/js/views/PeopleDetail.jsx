import React from "react";
import { useParams } from "react-router-dom";
const PeopleDetail= () =>{
    const {id}=useParams()
    return(
        <div>
            vista detallada de {id}
        </div>

    )
}
export default PeopleDetail;