import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Play } from "react-feather"
import Modal from "./Modal"
import YouTube from 'react-youtube'

const StyledVideo = styled.figure`
  position: relative;
  margin: 0;
  .video__inner {
    padding-bottom: ${({ ratio = 100 }) => `${ratio}%`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)),
      url(${({ background }) => background});
  }
  .video__play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    cursor: pointer;
  }
`

const VideoModal = styled.video`
  max-width: 100%;
`

export default class Video extends React.Component {
  static propsTypes = {
    poster: PropTypes.string,
    url: PropTypes.string
  }
  video = null
  state = {
    playing: false
  }
  render = _ => {
    const { poster, url, ...props } = this.props
    if(this.props.youTubeId){
      const opts = {
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          widget_referrer: 'wwww.statematters.org'
        }
      }
      return(
        <Modal
          body={
            <YouTube
                opts={opts}
                videoId={this.props.youTubeId}
              />
          }
          render={toggle => (
            <StyledVideo {...props} background={this.props.poster}>
              <div className="video__inner">
                {this.props.playButton && (
                  <div>
                    <Play
                      className="video__play-btn"
                      size={48}
                      onClick={toggle}
                      color="white"
                    />

                  </div>

                )}
              </div>
            </StyledVideo>
          )}
        />

      )
    }
    else {
      return (
        <Modal
          body={
            <VideoModal
              controls
              src={this.props.url}
              poster={this.props.poster}
              ref={node => (this.video = node)}
            />
          }
          render={toggle => (
            <StyledVideo {...props} background={this.props.poster}>
              <div className="video__inner">
                {this.props.playButton && (
                  <Play
                    className="video__play-btn"
                    size={48}
                    onClick={toggle}
                    color="white"
                  />
                )}
              </div>
            </StyledVideo>
          )}
        />
      )
    }
  }
}
