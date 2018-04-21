import React from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

const StyledModal = styled.div``

export default class Modal extends React.Component {
  modalNode = document.createElement("div")
  state = { show: false }
  componentDidMount = _ => document.body.appendChild(this.modalNode)
  componentWillUnmount = _ => document.body.removeChild(this.modalNode)
  toggleModal = _ => this.setState(state => ({ show: !state.show }))
  render = _ => (
    <React.Fragment>
      {this.state.show && createPortal(this.props.body(), this.modalNode)}
      {this.props.render(this.toggleModal)}
    </React.Fragment>
  )
}
