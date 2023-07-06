import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {


    return (
        <>
            <div className="navbar_main">
                <div className="logo">
                    <h1>OnlineStore</h1>
                </div>
                <ul>
                    <li><NavLink exact="true" to="/" activeClassName="active">HOMEPAGE</NavLink></li>
                    <li><NavLink to="/search" activeClassName="active">SEARCH</NavLink></li>
                    <li><NavLink to="/product" activeClassName="active">PRODUCT</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;
