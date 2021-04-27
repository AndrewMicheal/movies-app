import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import navbar from "./Navbar.module.css";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-light ${navbar.myBackground} `}>
                   <div className="container">
                    <a className={`navbar-brand ${navbar.myColor}`} href="/">Movie App</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mr-3">
                                    <NavLink className={`navbar-brand ${navbar.myColor}`} to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`navbar-brand ${navbar.myColor}`} to="/register">Register</NavLink>
                                </li>
                            </ul>
                        </div>
                   </div>
                </nav>
            </div>
        )
    }
}
