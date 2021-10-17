import React from 'react'
import { useLocation } from 'react-router-dom'
import './Navbar.css'

import {
    Link
} from "react-router-dom";
const Navbar = () => {
    let location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:'sticky',top:'0',display:'flex'}}>
                <div className="container-fluid">
                    <div className="image"></div>
                    <Link className="navbar-brand italic" to="/">Usman muawa-856</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link  ${location.pathname === "/" ? "active text-danger" : ""} italic`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${location.pathname === "/bio" ? "active text-danger" : ""} italic`} to="/bio">Biography</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${location.pathname === "/edu" ? "active text-danger" : ""} italic`} to="/edu">Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${location.pathname === "/skill" ? "active text-danger" : ""} italic`} to="/skill">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${location.pathname === "/about" ? "active text-danger" : ""} italic`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${location.pathname === "/contact" ? "active text-danger" : ""} italic`} to="/contact">Contact me</Link>
                            </li>

                        </ul>
                        <form className="d-flex mx-0">
                            <input className="form-control me-2 mx-0" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger outline-none italic  mx-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
