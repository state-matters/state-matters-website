import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ChevronLeft, ChevronRight } from "react-feather"
import theme from "theme"
import Video from "./Video"
import { Grid, Column } from "./Grid"

////
// New Scroller API. More Consice and extendable.
// (
//   <Scroller>
//     {scrollClick =>
//       videos.map((video, i) => (
//         <Video
//           onClick={e => scrollClick(e, i)}
//           url={video.url}
//           poster={video.poster}
//         />
//       ))
//     }
//   </Scroller>
// )
////

class Scroller extends React.Component {
  scrollClick = (e, i) => {
    const target = e.currentTarget
    const bounding = target.getBoundingClientRect()
    console.log(bounding.left, bounding.width)
    this.setState({
      selected: i,
      translate: bounding.left > 24 ? bounding.left - bounding.width : 0
    })
  }
  render = _ => {
    return (
      <StyledScroller>
        {this.prop.render ? (
          <div className="outer-wrapper">{this.props.render(scrollClick)}</div>
        ) : (
          <div className="outer-wrapper">
            {this.props.children(scrollClick)}
          </div>
        )}
      </StyledScroller>
    )
  }
}

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
    border-radius: 4px;
    background-color: ${theme.colors.secondary["500"]};
    box-shadow: 0 12px 12px -12px rgba(0, 0, 0, 0.12);
    overflow: hidden;
  }
  .outer-wrapper.selected {
    flex-basis: 50%;
  }
  .inner-wrapper {
    padding-bottom: 75%;
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .title {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    padding-top: 2rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${theme.colors.grey["100"]};
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
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
    const bounding = target.getBoundingClientRect()
    console.log(bounding.left, bounding.width)
    this.setState({
      selected: i,
      translate: bounding.left > 24 ? bounding.left - bounding.width : 0
    })
  }
  render = _ => {
    return (
      <React.Fragment>
        <StyledScroller
          translate={this.state.translate}
          ref={node => (this.scrollerNode = node)}
          className={this.props.className}
        >
          {this.props.videos.map((video, i) => (
            <div
              key={video.url}
              onClick={e => this.handleVideoSelect(e, i)}
              className={
                i === this.state.selected
                  ? "selected outer-wrapper"
                  : "outer-wrapper"
              }
            >
              <div className="inner-wrapper">
                <Video
                  className="video"
                  url={video.url}
                  poster={video.poster}
                  playButton={i === this.state.selected}
                />
              </div>
              {i === this.state.selected && (
                <h3 className="title">{video.title}</h3>
              )}
            </div>
          ))}
        </StyledScroller>
        {/* <ChevronLeft onClick={e => console.log(this.state.selected - 1)} />
        <ChevronRight onClick={e => console.log(this.state.selected + 1)} /> */}
      </React.Fragment>
    )
  }
}
