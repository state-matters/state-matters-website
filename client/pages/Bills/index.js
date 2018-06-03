import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Markdown from "markdown-to-jsx"
import { getBill } from "ducks/bills"
import { BlockLink } from "components/TouchTarget"
import theme from "theme"

const StyledBillPage = styled.section`
  margin-top: 10rem;
  padding-top: 1rem;
  min-height: 100vh;
  .bill__bill-number,
  .bill__title,
  .bill__status {
    margin-top: 2rem;
  }
  .bill__status {
    color: ${theme.colors.primary["500"]};
    font-weight: 700;
  }
`

class Bill extends React.Component {
  state = { loaded: false }
  componentDidMount = _ =>
    this.props
      .getBill(this.props.match.params.bill_id)
      .then(_ => this.setState({ loaded: true }))
  render = _ => {
    if (!this.state.loaded) return <div>...loading</div>
    const { fields } = this.props.bill
    return (
      <StyledBillPage className="container">
        <BlockLink color={theme.colors.grey["900"]} to="/">
          Back
        </BlockLink>
        <h1 className="bill__bill-number">{fields.billNumber}</h1>
        <h2 className="bill__title">{fields.title}</h2>
        <h4 className="bill__status">{fields.status.fields.status_text}</h4>
        <Markdown>{fields.brief}</Markdown>
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
