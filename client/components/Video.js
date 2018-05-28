import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Play } from "react-feather"
import Modal from "./Modal"

const StyledVideo = styled.figure`
  position: relative;
  margin: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)),
    url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 100%;
  .play-btn {
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
  render = _ => (
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
        <StyledVideo
          className={this.props.className}
          background={this.props.poster}
        >
          {this.props.playButton && (
            <Play
              className="play-btn"
              size={48}
              onClick={toggle}
              color="white"
            />
          )}
        </StyledVideo>
      )}
    />
  )
}
