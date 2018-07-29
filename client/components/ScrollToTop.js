import React from "react"
import { withRouter } from "react-router-dom"

export default withRouter(
  class extends React.Component {
    componentDidUpdate = prevProps => {
      if (this.props.location !== prevProps.location) {
        window.scroll(0, 0)
      }
    }
    render = _ => this.props.children
  }
)
