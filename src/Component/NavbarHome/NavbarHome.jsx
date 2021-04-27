import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import { Link , NavLink } from "react-router-dom";
import SecureLs from "secure-ls";
import navBarHome from "./NavbarHome.module.css";

let ls = new SecureLs({ encodingType: "aes" });

export default class NavbarHome extends Component {
    logOut = () => {
        ls.removeAll();
        this.props.isAuth(false);
    }

    render() {
    let encodedToken = ls.get("token");
    let token = jwtDecode(encodedToken);

    return (
      <React.Fragment>
        <header className = {`${navBarHome.myBackground}`}>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand myColor text-capitalize" href="/">welcome {token.first_name + " "+token.last_name}</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto  d-flex justify-content-between w-50 align-items-center">
                  <li className="nav-item">
                    <NavLink className={`navbar-brand ${navBarHome.myColor}`}  to="/home">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={`navbar-brand ${navBarHome.myColor}`} to="/tv">Tv</NavLink>
                  </li>
                  <li className="nav-item">
                    <Link onClick = {this.logOut} to = "/login" className="logout">Logout</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
