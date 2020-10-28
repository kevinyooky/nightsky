import React from "react";
import VideoList from "./vid/VideoList";
import VideoDetail from "./vid/VideoDetail";

const Telescope = () => {
  return (
    <div>
      <div style={{ marginTop: "30px" }} class="showcase container">
        <div class="row">
          <div class="col s12 m10 center">
            {/* <h5 style={{ color: "#e9d3ff" }}>Welcome to NightSky</h5> */}
            <h1 style={{ color: "#e9d3ff" }}>Telescopes</h1>
            <p style={{ color: "#e9d3ff" }}>
              Is this your first time using a telescope? Learn how to use one!
            </p>
            <p id="video"></p>
            <br />
            <br />
          </div>
        </div>
      </div>
      <VideoDetail />
      <VideoList />
    </div>
  );
};

export default Telescope;
