import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getBill } from "ducks/bills"
import { BlockLink } from "components/TouchTarget"
import theme from "theme"

const StyledBillPage = styled.section`
  margin-top: 10rem;
  padding-top: 1rem;
  min-height: 100vh;
`

class Bill extends React.Component {
  state = { loaded: false }
  componentDidMount = _ =>
    this.props
      .getBill(this.props.match.params.bill_id)
      .then(_ => this.setState({ loaded: true }))
  render = _ => {
    if (!this.state.loaded) return <div>...loading</div>
    return (
      <StyledBillPage className="container">
        <BlockLink color={theme.colors.grey["900"]} to="/">
          Back
        </BlockLink>
        <h1>{this.props.bill.fields.title}</h1>
      </StyledBillPage>
    )
  }
}

export default connect(
  ({ bills: { items } }, ownProps) => ({
    bill: items[ownProps.match.params.bill_id]
  }),
  { getBill }
)(Bill)
