import React from "react"
import styled from "styled-components"
import axios from "axios"
import { connect } from "react-redux"
import { getAllBills } from "ducks/bills"
import Loader from "components/Loader"
import { Grid, Column } from "components/Grid"
import VideoScroller from "components/VideoScroller"
import theme from "theme"

const StyledBillList = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  .bill-list__title {
    margin-bottom: 2rem;
  }
`

class BillList extends React.Component {
  componentDidMount = _ => this.props.getAllBills()
  render() {
    const {
      props: { loaded, bills }
    } = this
    const videos = loaded
      ? bills.map(bill => ({
          url: bill.fields.video.fields.file.url,
          poster: bill.fields.poster.fields.file.url,
          title: bill.fields.title
        }))
      : []
    if (!loaded) return <Loader />
    return (
      <StyledBillList className="bill-list container">
        <h3 className="bill-list__title">Featured Videos</h3>
        <Grid>
          {/* <Column sm={4} className="bill-list-info card">
            <h3>The Big House Bill</h3>
            <h4>HB 66</h4>
            <span className="status">Status: In Committee</span>
          </Column> */}
          <Column sm={12}>
            <VideoScroller videos={videos} />
          </Column>
        </Grid>
      </StyledBillList>
    )
  }
}

export default connect(
  ({ bills: { items, loaded } }) => ({
    loaded,
    bills: items
  }),
  { getAllBills }
)(BillList)
