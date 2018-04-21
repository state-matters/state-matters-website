import React from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { X } from "react-feather"

const StyledModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.6);
  .body {
    position: relative;
    background-color: ${({ theme }) => theme.colors.ui.light};
    padding: 1rem;
    border-radius: 4px;
    width: 100%;
    max-width: 60rem;
    .close {
      position: absolute;
      z-index: 3;
      top: 1rem;
      right: 1rem;
    }
  }
`

export default class Modal extends React.Component {
  modalNode = document.createElement("div")
  state = { show: false }
  componentDidMount = _ => document.body.appendChild(this.modalNode)
  componentWillUnmount = _ => document.body.removeChild(this.modalNode)
  toggleModal = _ => {
    this.setState(state => {
      if (!state.show) document.body.style.overflowY = "hidden"
      else document.body.style.overflowY = "initial"
      return { show: !state.show }
    })
  }
  render = _ => (
    <React.Fragment>
      {this.state.show &&
        createPortal(
          <StyledModal onClick={this.toggleModal}>
            <div className="body" onClick={e => e.stopPropagation()}>
              <X className="close" onClick={this.toggleModal} />
              {this.props.body}
            </div>
          </StyledModal>,
          this.modalNode
        )}
      {this.props.render(this.toggleModal)}
    </React.Fragment>
  )
}
