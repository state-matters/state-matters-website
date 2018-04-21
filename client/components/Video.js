import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Play } from "react-feather"
import Modal from "./Modal"

const StyledVideo = styled.figure`
  position: relative;
  margin: 0;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
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
          onClick={toggle}
        >
          <Play className="play-btn" size={48} />
        </StyledVideo>
      )}
    />
  )
}
