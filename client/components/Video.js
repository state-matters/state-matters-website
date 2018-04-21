import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { PlayCircle, PauseCircle, Maximize } from "react-feather"

const StyledVideo = styled.figure`
  position: relative;
  margin: 0;
  &:hover {
    .pause-button {
      display: block;
    }
  }
  video {
    position: relative;
    display: block;
    width: 100%;
    object-fit: cover;
    &:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }
  }
  .play-btn,
  .pause-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${({ theme }) => theme.colors.ui.light};
    cursor: pointer;
    height: 4rem;
    width: 4rem;
    transform: translate(-50%, -50%);
    transition: 200ms ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.ui.main};
    }
  }
  .pause-btn {
    display: none;
  }
  .fullscreen-btn {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    height: 2rem;
    width: 2rem;
    color: ${({ theme }) => theme.colors.ui.light};
  }
`

export default class Video extends React.Component {
  static propsTypes = {
    poster: PropTypes.string,
    url: PropTypes.string
  }
  state = {
    playing: false
  }
  componentDidUpdate = prevProps => {
    if (prevProps.url !== this.props.url) {
      this.video.load()
    }
  }
  togglePlay = e =>
    this.setState(state => {
      if (state.playing) this.video.pause()
      else this.video.play()
      return {
        playing: !state.playing
      }
    })
  handleFullScreen = e => this.video.webkitRequestFullscreen()
  render = _ => (
    <StyledVideo className={this.props.className}>
      <video
        poster={this.props.poster}
        ref={node => (this.video = node)}
        src={this.props.url}
      />
      {this.state.playing ? (
        <PauseCircle className="pause-btn" onClick={this.togglePlay} />
      ) : (
        <PlayCircle className="play-btn" onClick={this.togglePlay} />
      )}
      <Maximize className="fullscreen-btn" onClick={this.handleFullScreen} />
    </StyledVideo>
  )
}
