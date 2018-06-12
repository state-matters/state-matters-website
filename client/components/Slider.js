import React from "react"
import styled from "styled-components"
import theme from "theme"
import Swipeable from "react-swipeable"

const StyledScroller = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  .outer-wrapper {
    overflow-x: visible;
  }
  .inner-wrapper {
    display: flex;
    transition: transform 300ms;
  }
  .item {
    flex: 0 0 calc(33.34% - 2rem);
    min-width: calc(100vw - 2rem);
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
    @media (min-width: 40rem) {
      min-width: 30rem;
    }
  }
`

export default class extends React.Component {
  container = null
  state = {
    left: 0,
    elementWidth: 0
  }
  componentDidMount = () =>
    this.setState({
      elementWidth:
        Math.round(this.container.firstChild.getBoundingClientRect().width) + 24
    })
  handleSwipe = (e, dx) =>
    this.setState(state => {
      if (dx < 0) {
        // swiped right
        return {
          left: Math.max(state.left - state.elementWidth, 0)
        }
      } else {
        // swiped left
        const fromRight = this.container.lastChild.getBoundingClientRect().right
        if (fromRight > window.innerWidth)
          return {
            left: state.left + state.elementWidth
          }
      }
    })
  render = () => {
    const { children, ...props } = this.props
    return (
      <Swipeable onSwiped={this.handleSwipe} trackMouse={true}>
        <StyledScroller {...props}>
          <div className="outer-wrapper container">
            <div
              className="inner-wrapper"
              style={{
                transform: `translate3d(-${this.state.left}px, 0, 0)`
              }}
              ref={node => (this.container = node)}
            >
              {React.Children.map(children, child => (
                <div className="item">{child}</div>
              ))}
            </div>
          </div>
        </StyledScroller>
      </Swipeable>
    )
  }
}
