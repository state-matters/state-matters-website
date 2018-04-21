import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Video from "./Video"
import { Grid, Column } from "./Grid"

const StyledScroller = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: visible;
  min-height: 35rem;
  transition: 350ms ease;
  transform: translate3d(-${({ translate }) => translate}px, 0, 0);
  .outer-wrapper {
    position: relative;
    flex: 0 0 30%;
    margin-right: 1rem;
    z-index: 1;
    transition: 350ms ease;
  }
  .outer-wrapper.selected {
    flex-basis: 45%;
  }
  .inner-wrapper {
    background-color: ${({ theme }) => theme.colors.accent.main};
    border-radius: 2px;
    box-shadow: 0 12px 12px -12px rgba(0, 0, 0, 0.12);
    padding-bottom: 75%;
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export default class VideoScroller extends React.Component {
  static propTypes = {
    videos: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        placeholder: PropTypes.string
      })
    )
  }
  scrollerNode = null
  state = { translate: 0, selected: 0 }
  handleVideoSelect = (e, i) => {
    const target = e.currentTarget
    this.setState(state => {
      return {
        selected: i,
        translate: target.offsetLeft > 24 ? target.offsetLeft - 180 : 0
      }
    })
  }
  render = _ => {
    return (
      <StyledScroller
        translate={this.state.translate}
        ref={node => (this.scrollerNode = node)}
        className={this.props.className}
      >
        {this.props.videos.map((video, i) => (
          <div
            key={video.url}
            className="outer-wrapper"
            onClick={e => this.handleVideoSelect(e, i)}
            className={
              i === this.state.selected
                ? "selected outer-wrapper"
                : "outer-wrapper"
            }
          >
            <div className="inner-wrapper">
              <Video className="video" url={video.url} poster={video.poster} />
            </div>
          </div>
        ))}
      </StyledScroller>
    )
  }
}
