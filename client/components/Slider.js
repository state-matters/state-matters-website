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
  }
`

class Slider extends React.Component {
  render = _ => <SliderWrapper>{this.props.children}</SliderWrapper>
}

Slider.Slide = styled.div.attrs({
  className: "slider__slide"
})`
  flex: 1 0;
  flex-basis: 100%;
  @media (min-width: ${theme.breakPoints.sm}) {
    flex-basis: ${props => props.basis || "100%"};
  }
`

export default Slider
