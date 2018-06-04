import React from "react"
import styled from "styled-components"
import theme from "theme"

const SliderWrapper = styled.section`
  position: relative;
  overflow: hidden;
  .list {
    overflow-x: visible;
    .inner-list {
      display: flex;
      transition: transform 300ms;
    }
  }
  .slider__slide {
    position: relative;
    flex: 0 1;
    flex-basis: 100%;
    width: 100%;
    &:first-of-type {
      flex-basis: 100%;
      width: 100%;
    }
    &:not(:first-of-type) {
      display: none;
    }
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
    @media (min-width: ${theme.breakPoints.sm}) {
      &:first-of-type {
        flex-basis: ${props =>
          props.activeBasis ? `${props.activeBasis}%` : "100%"};
        width: ${props =>
          props.activeBasis ? `${props.activeBasis}%` : "100%"};
      }
      &:not(:first-of-type) {
        display: initial;
      }
      flex-basis: ${props => (props.basis ? `${props.basis}%` : "100%")};
      width: ${props => (props.basis ? `${props.basis}%` : "100%")};
    }
  }
  @media (min-width: ${theme.breakPoints.sm}) {
  }
`

class Slider extends React.Component {
  state = { active: 0 }
  render = _ => {
    const { children, ...props } = this.props
    return (
      <SliderWrapper {...props}>
        <div className="list">
          <div className="inner-list">{children}</div>
        </div>
      </SliderWrapper>
    )
  }
}

Slider.Slide = props => (
  <div className={`${props.className} slider__slide`}>{props.children}</div>
)

Slider.Slide.displayName = "Slide"

export default Slider
