import propTypes from "prop-types";
import React from "react";

const Card=(props) =>{


    return(
    <div className="col card m-2" style={{padding:0}}>
            <div className="card-header" style={{padding:0}}>
                    <img src={"	https://starwars-visualguide.com/assets/img/"+props.type+"/"+props.uid+".jpg"} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
                    <p className="card-title"><strong>{props.name}</strong></p>
                    <button href="#" className="btn btn-outline-danger"><i className="far fa-heart"></i></button>                                   
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
       
};