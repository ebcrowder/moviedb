import React, { Component } from 'react';

import YouTube from 'react-youtube';

export default class Trailer extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <YouTube
        videoId={this.props.trailer.key}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}
