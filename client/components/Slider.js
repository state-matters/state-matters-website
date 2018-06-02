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
    flex: 1 0;
    flex-basis: 100%;
    width: 100%;
    &:first-of-type {
      flex-basis: ${props =>
        props.activeBasis ? `${props.activeBasis}%` : "100%"};
      width: ${props => (props.activeBasis ? `${props.activeBasis}%` : "100%")};
    }
    @media (min-width: ${theme.breakPoints.sm}) {
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
    return <SliderWrapper {...props}>{children}</SliderWrapper>
  }
}

Slider.Slide = props => (
  <div className={`${props.className} slider__slide`}>{props.children}</div>
)

Slider.Slide.displayName = "Slide"

export default Slider
