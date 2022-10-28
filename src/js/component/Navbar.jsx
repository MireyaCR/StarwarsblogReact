import React from "react";

const Navbar=()=> {
    return(
        <nav className="navbar bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
                </a>
                <button type="button" class="btn btn-primary position-relative">Favoritos
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                    </span>
                </button>
            </div>
        </nav>
    )
}
export default Navbar;
