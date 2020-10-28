import React from "react";
import youtube from "../apis/youtube";
import { submitSearchTerm } from "../actions";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import Milkyway from "./MilkyWay";
import Stars from "./Stars";
import Telescope from "./Telescope";
import Home from "./Home";
import ScrollToTop from "react-router-scroll-top";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.onTermSubmit();
  }

  onTermSubmit = async (term) => {
    var current = "";
    if (window.location.pathname === "/") {
      current = "milky way documentary";
    } else if (window.location.pathname === "/milkyway") {
      current = "how to star gaze";
    } else if (window.location.pathname === "/stargazing") {
      current = "how to use a telescope";
    } else if (window.location.pathname === "/telescope") {
      current = "milky way documentary";
    }

    // const KEY = "AIzaSyB0LBQP2JTP37L8ji9GcAXfj11G7oXG4ec";
    const KEY = "AIzaSyBITxTd1lCV021Kc8ql5wzKmq1E41XDvxs";

    const response = await youtube.get("/search", {
      params: {
        q: current,
        part: "snippet",
        maxResults: 9,
        type: "video",
        key: KEY,
      },
    });
    this.props.submitSearchTerm(response.data);
  };

  onVideoSelect = (e) => {
    this.setState({ selectedVideo: e });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Header onTermSubmit={this.onTermSubmit} />
            {/* <SearchBar onTermSubmit={this.onTermSubmit} /> */}
          </div>
          {/* <VideoDetail video={this.props.defaultVideo} /> */}
          <ScrollToTop>
            <Route exact path="/" component={Home} />
            <Route path="/milkyway" component={Milkyway} />
            <Route path="/stargazing" component={Stars} />
            <Route path="/telescope" component={Telescope} />
          </ScrollToTop>
          {/* <!-- LOGIN MODAL --> */}
          <div id="login-modal" className="modal">
            <div className="modal-content">
              <h4>Account Login</h4>
              <p>Login to access your account dashboard</p>
              <form>
                <div className="input-field">
                  <input type="email" id="email" />
                  <label for="email">Email</label>
                </div>
                <div className="input-field">
                  <input type="password" id="password" />
                  <label for="password">Password</label>
                </div>
              </form>
            </div>
            {/* <div className="modal-footer">
              <a href="#" className="modal-action modal-close btn grey">
                <i className="fa fa-sync"></i> Reset Password
              </a>
              <a href="#" className="modal-action modal-close btn purple">
                <i className="fa fa-lock"></i> Login
              </a>
            </div> */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    defaultVideo: state.selectedVideo,
  };
};

export default connect(mapStateToProps, { submitSearchTerm })(App);
