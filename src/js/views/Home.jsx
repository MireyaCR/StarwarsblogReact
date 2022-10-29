import React from "react";

const Home=()=> {
    return(
             <div className="container-fluid p-3">
                <div className="row row-cols-4 row-cols-lg-4 g-4 mx-5 mb-5">
                    <div className="col">
                        <div className="card" width="10" height="5">
                            <div className="card-header">
                                <img src="..." className="card-img-top" alt="..."/>
                            </div>
                            <div className="card-body">
                                    <h5 className="card-title">El titulo</h5>
                                    <p className="card-text">La descripcion.</p>                         
                                    <button href="#" className="btn btn-primary"> mas </button>                                   
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" width="10" height="5" >
                            <div className="card-header">
                                <img src="..." className="card-img-top" alt="..."/>
                            </div>
                            <div className="card-body">
                                    <h5 className="card-title">El titulo</h5>
                                    <p className="card-text">La descripcion.</p>                         
                                    <button href="#" className="btn btn-primary"> mas </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" width="10" height="5" >
                            <div className="card-header">
                                <img src="..." className="card-img-top" alt="..."/>
                            </div>
                            <div className="card-body">
                                    <h5 className="card-title">El titulo</h5>
                                    <p className="card-text">La descripcion.</p>                         
                                    <button href="#" className="btn btn-primary"> mas </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card"width="10" height="5" >
                            <div className="card-header">
                                <img src="..." className="card-img-top" alt="..."/>
                            </div>
                            <div className="card-body">
                                    <h5 className="card-title">El titulo</h5>
                                    <p className="card-text">La descripcion.</p>                         
                                    <button href="#" className="btn btn-primary">mas </button>
                            </div>
                        </div>
                    </div>
                </div>    
             </div>
    )
}
export default Home;
