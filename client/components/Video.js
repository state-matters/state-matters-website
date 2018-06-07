import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Play } from "react-feather"
import Modal from "./Modal"
import ReactPlayer from 'react-player'

const StyledVideo = styled.figure`
  position: relative;
  margin: 0;
  .video__inner {
    padding-bottom: 100%;
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

    render = _ => {
      return <ReactPlayer
        url={this.props.url}
        config={
          { file:
            { attributes:
              { poster: this.props.poster
              }
            } }
          }
          controls
        />
    }

}
