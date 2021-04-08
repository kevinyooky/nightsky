import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div style={{ marginTop: "130px" }} class="showcase container">
        <div class="row">
          <div class="col s12 m10 center">
            <h5 style={{ color: "#e9d3ff" }}>Welcome to NightSky</h5>
            <h1 style={{ color: "#e9d3ff" }}>Explore the Galaxy</h1>
            <p></p>
            <br />
            <br />
            <NavLink
              to="/milkyway"
              class="btn btn-large purple white-text waves-effect waves-light signup-btn"
            >
              Explore
            </NavLink>
          </div>
        </div>
      </div>
      <section style={{ marginTop: "200px" }} class="section section-about">
        <div class="container">
          <h3>
            <span style={{ color: "plum" }}>What is Night Sky?</span>
          </h3>
          <div class="row">
            <div class="col s12 m6">
              <p style={{ color: "plum" }} class="flow-text">
                NightSky is an educational platform to inspire you to become a
                student of astronomy. At NightSky you will learn about the Milky
                Way Galaxy, how to identify constellations, and telescope
                fundamentals.
              </p>
            </div>
            <div class="col s12 m4 offset-m1">
              <img src="img/tech.jpg" alt="" class="circle responsive-img" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SECTION: ICON BOXES --> */}
      <section
        style={{ marginTop: "250px", marginBottom: "150px" }}
        class="section section-icons center"
      >
        <div class="container">
          <div class="row">
            <div class="col s12 m4">
              <div
                style={{ backgroundColor: "#e9d3ff", opacity: "0.8" }}
                class="card-panel"
              >
                <i class="fas fa-atom fa-3x deep-purple-text text-darken-2"></i>
                <h5 class="grey-text text-darken-4">
                  <NavLink to="/milkyway">Milky Way</NavLink>
                </h5>
                <p>Learn about your favorite galaxy, the Milky Way.</p>
              </div>
            </div>
            <div class="col s12 m4">
              <div
                style={{ backgroundColor: "#e9d3ff", opacity: "0.8" }}
                class="card-panel"
              >
                <i class="fa fa-star fa-3x deep-purple-text text-darken-2"></i>
                <h5 class="grey-text text-darken-4">
                  <NavLink to="/stargazing">Star Gazing</NavLink>
                </h5>
                <p>
                  Learn about the constellations and stargazing fundamentals. 
                </p>
              </div>
            </div>
            <div class="col s12 m4">
              <div
                style={{ backgroundColor: "#e9d3ff", opacity: "0.8" }}
                class="card-panel"
              >
                <i class="fas fa-microscope fa-3x deep-purple-text text-darken-2"></i>
                <h5 class="grey-text text-darken-4">
                  <NavLink to="/telescopes">Telescope</NavLink>
                </h5>
                <p>
                  All star gazers need a telescope for better vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- LOGIN MODAL --> */}
      {/* <div id="login-modal" class="modal">
        <div class="modal-content">
          <h4>Account Login</h4>
          <p>Login to access your account dashboard</p>
          <form>
            <div class="input-field">
              <input type="email" id="email" />
              <label for="email">Email</label>
            </div>
            <div class="input-field">
              <input type="password" id="password" />
              <label for="password">Password</label>
            </div>
          </form>
        </div>
         <div class="modal-footer">
          <a href="#" class="modal-action modal-close btn grey">
            <i class="fa fa-sync"></i> Reset Password
          </a>
          <a href="#" class="modal-action modal-close btn purple">
            <i class="fa fa-lock"></i> Login
          </a>
        </div> 
      </div> */}
    </div>
  );
};

export default Home;
