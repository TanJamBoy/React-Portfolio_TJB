import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Tanner Boyer</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="/projects">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;