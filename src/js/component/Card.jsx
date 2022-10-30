import React from "react";

import getPeople from "../api/getPeople.js";

const Card=() =>{
    return(
    <div className="card" width="10" height="5">
            <div className="card-header">
                    <img src="" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
                    <h5 className="card-title">nombre</h5>
                    <p className="card-text">La descripcion.</p>                         
                    <button href="#" className="btn btn-primary"> mas </button>                                   
            </div>
    </div>
)
}
export default Card