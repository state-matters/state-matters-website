import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  padding-top: ${({ theme }) => theme.baseSize * 5}px;
  padding-left: 24px;
  min-height: 100vh;
  display: flex;
  align-items: center;
`

const Level = styled.div`
  height: 120px;
  width: 100%;
  overflow: hidden;
  position: relative;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const Character = styled.div`
  position: absolute;
  bottom: 4px;
  width: 12px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.ui.dark};
`
const House = styled.div`
  position: absolute;
  bottom: 2px;
  left: ${({ left }) => left}px;
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.accent.light};
`
export default class Game extends React.Component {
  state = {
    x: 0,
    offset: 0
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = e => {
    const eventTarget = e

    switch (eventTarget.keyCode) {
      case 39:
        if (this.state.x > window.innerWidth - 100) {
          this.setState(state => ({
            ...state,
            offset: state.offset - 10
          }))
        } else {
          this.setState(state => ({
            ...state,
            x: state.x + 10
          }))
        }
        break
      case 37:
        if (this.state.offset < 0) {
          this.setState(state => ({
            ...state,
            offset: state.offset + 10
          }))
        } else {
          this.setState(state => ({
            ...state,
            x: state.x > 0 ? state.x - 10 : 0
          }))
        }
        break
      default:
        break
    }
  }

  render = _ => (
    <Wrapper>
      <Level>
        <Character style={{ transform: `translateX(${this.state.x}px)` }} />
        <Background style={{ transform: `translateX(${this.state.offset}px)` }}>
          <House left={400} />
          <House left={600} />
          <House left={900} />
          <House left={1200} />
          <House left={1800} />
        </Background>
      </Level>
    </Wrapper>
  )
}
