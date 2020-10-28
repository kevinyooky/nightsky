import React from "react";
import { selectedVideo } from "../../actions";
import { connect } from "react-redux";
// import Scrollspy from "react-scrollspy";

class VideoList extends React.Component {
  renderedList() {
    if (this.props.videos) {
      return this.props.videos.items.map((video) => {
        return (
          <div className="item-container">
            <div
              key={video.id.videoId}
              className="grid-item card"
              onClick={() => {
                this.props.selectedVideo(video);
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                className="card-img-top img-fluid"
                src={video.snippet.thumbnails.medium.url}
                alt="video thumbnail"
              />
              <div className="card-body">
                {/* <Scrollspy items={["video"]} currentClassName="is-current"> */}
                <a id="scrollToVideo" href="#video" className="card-title">
                  {video.snippet.title}
                </a>
                {/* </Scrollspy> */}
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div></div>;
    }
  }
  render() {
    return <div className="grid-container">{this.renderedList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { videos: state.searchTerm };
};

export default connect(mapStateToProps, { selectedVideo })(VideoList);
