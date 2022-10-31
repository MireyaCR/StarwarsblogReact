import propTypes from "prop-types";
import React from "react";
import notfound from "../../../public/assets/404.png";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Card=(props) =>{
    const history=useHistory();
    return(
    <div className="col card m-2" style={{padding:0}}>
            <div className="card-header" style={{padding:0}}>
                <img src={"https://starwars-visualguide.com/assets/img/"+props.typeImage+"/"+props.uid+".jpg"} className="card-img-top" onError={(event)=>event.target.src=notfound} alt="..."/>
            </div>
            <div className="card-body">
                    <p className="card-title"><strong>{props.name}</strong></p>                   
                    <button onClick={()=>{
                        history.push("/detail/"+props.uid,{type:props.type})
                    }} href="#" type="button" className="btn btn-primary btn-sm float-start">Learn more </button>         
                    
                    <button href="#" className="btn btn-outline-danger btn-sm float-end"><i className="far fa-heart"></i></button>                              
                </div>
    </div>
    )
}
export default Card

Card.propTypes={
        name:propTypes.string,
        uid:propTypes.string,
        url:propTypes.string,
        type:propTypes.string,
        typeImage:propTypes.string,
       
};