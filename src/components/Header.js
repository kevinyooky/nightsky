import React from "react";
import GoogleAuth from "./GoogleAuth";
import { NavLink } from "react-router-dom";
// import {Link} from 'react-reouter-dom'

const Header = ({ onTermSubmit }) => {
  return (
    <div>
      <header className="main-header test">
        {/* <!-- NAVBAR --> */}
        <nav className="transparent">
          <div className="container">
            <div className="nav-wrapper">
              <NavLink
                to="/"
                className="brand-logo"
                style={{ color: "#e9d3ff" }}
              >
                NightSky
              </NavLink>
              <a
                href="#"
                data-activates="mobile-nav"
                className="button-collapse"
              >
                <i className="fa fa-bars"></i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <NavLink to="/" className=" menu-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/milkyway"
                    className="menu-link"
                    // style={{ color: "#e9d3ff" }}
                    onClick={onTermSubmit}
                  >
                    Milky Way
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/stargazing"
                    className="menu-link"
                    // style={{ color: "#e9d3ff" }}
                    onClick={onTermSubmit}
                  >
                    Star Gazing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/telescope"
                    className="menu-link"
                    // style={{ color: "# " }}
                    onClick={onTermSubmit}
                  >
                    Telescope
                  </NavLink>
                </li>
                {/* <li>
                  <a
                    href="signup.html"
                    className="menu-link"
                    style={{ color: "#e9d3ff" }}
                  >
                    Sign Up
                  </a>
                </li> */}
                <li>
                  <GoogleAuth />
                </li>
              </ul>
              <ul className="side-nav" id="mobile-nav">
                <h4 className="purple-text text-darken-4 center">NightSky</h4>
                <li>
                  <div className="divider"></div>
                </li>
                <li>
                  <a href="index.html">
                    <i className="fa fa-home grey-text text-darken-4"></i> Home
                  </a>
                </li>
                <li>
                  <a href="solutions.html">
                    <i className="fa fa-cog grey-text text-darken-4"></i>{" "}
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="signup.html">
                    <i className="fa fa-users grey-text text-darken-4"></i> Sign
                    Up
                  </a>
                </li>
                <li>
                  <div className="divider"></div>
                </li>
                {/* <li>
                  <a href="#" className="btn purple">
                    Login
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
    // /* <!-- SHOWCASE --> */
    //     <div className="showcase container">
    //       <div className="row">
    //         <div className="col s12 m10 center">
    //           <h5 style={{ color: "#e9d3ff" }}>Welcome to NightSky</h5>
    //           <h1 style={{ color: "#e9d3ff" }}>Explore The Galaxy</h1>
    //           <p></p>
    //           <br />
    //           <br />
    //           <a
    //             href="signup.html"
    //             className="btn btn-large purple white-text waves-effect waves-light signup-btn"
    //           >
    //             Explore
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    // </div>
  );
};

export default Header;
