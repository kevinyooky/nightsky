import React from "react";
import { connect } from "react-redux";

class VideoDetail extends React.Component {
  renderVideo = (video) => {
    return (
      <div className="card-group">
        <div className="card">
          <iframe
            title="video player"
            width="749"
            height="300"
            key={video.id.videoId}
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
          />
          <div className="card-body">
            <h4 className="card-title">{video.snippet.title}</h4>
            <p className="card-description text-muted">
              {video.snippet.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.selected) {
      const video = this.props.selected;
      this.renderVideo(video);
    } else {
      return <div></div>;
    }
    return <div>{this.renderVideo(this.props.selected)}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.selectedVideo.selectedVideo,
  };
};

export default connect(mapStateToProps)(VideoDetail);
