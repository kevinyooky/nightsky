import React from "react";
import VideoList from "./vid/VideoList";
import VideoDetail from "./vid/VideoDetail";

const MilkyWay = () => {
  return (
    <div>
      <div style={{ marginTop: "30px" }} class="showcase container">
        <div class="row">
          <div class="col s12 m10 center">
            {/* <h5 style={{ color: "#e9d3ff" }}>Welcome to NightSky</h5> */}
            <h1 style={{ color: "#e9d3ff" }}>Milky Way</h1>
            <p style={{ color: "#e9d3ff" }}>
              Here you will learn about our favorite galaxy, the Milky Way.
            </p>

            <br id="video" />
            <br />
          </div>
        </div>
      </div>
      <VideoDetail />
      <VideoList />
    </div>
  );
};

export default MilkyWay;
