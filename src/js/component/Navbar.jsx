import React from "react";

const Navbar=()=> {
    return(
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src="https://cdn.goodvinilos.com/61003/vinilo-logo-star-wars.jpg" alt="StarWars" width="100" height="100"/>
                </a>
                <button type="button" className="btn btn-primary position-relative">Favoritos
                    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                        <span className="visually-hidden">New alerts</span>
                    </span>
                </button>
            </div>
        </nav>
    )
}
export default Navbar;
