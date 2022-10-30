import Card from "../component/Card.jsx";
import React,{usesTate,useEffect} from "react";

const People=()=> {

  
    return(
            <div className="container-fluid p-3">
                 <div className="row row-cols-4 row-cols-lg-4 g-4 mx-5 mb-5">
                       <div className="col">
                         <Card/>
                       </div>                                                      
                   </div>    
                </div>
       )
     }
export default People;
