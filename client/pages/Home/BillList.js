import React from "react"
import styled from "styled-components"
import axios from "axios"
import { connect } from "react-redux"
import { getAllBills } from "ducks/bills"
import Loader from "components/Loader"
import { Grid, Column } from "components/Grid"
import VideoScroller from "components/VideoScroller"

const StyledBillList = styled(Grid)`
  margin-top: 10rem;
  margin-bottom: 10rem;
  .bill-video {
    margin-bottom: 2rem;
    box-shadow: 1rem 1rem 0 0 rgba(243, 126, 90, 0.24);
  }
  .next-up {
    display: flex;
    .video {
      margin-right: 2rem;
      background-size: cover;
      background-repeat: no-repeat;
      border: 0.25rem solid transparent;
      box-shadow: 1rem 1rem 0 0 rgba(243, 126, 90, 0.24);
      height: 7.5rem;
      width: 15rem;
      &.active {
        border: 0.25rem solid ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`

class BillList extends React.Component {
  componentDidMount = _ => this.props.getAllBills()
  render() {
    const {
      props: { loaded, selectedId, bills, idList, changeSelectedVideo }
    } = this
    const videos = loaded
      ? bills.map(bill => ({
          url: bill.fields.video.fields.file.url,
          poster: bill.fields.poster.fields.file.url
        }))
      : []
    if (!loaded) return <Loader />
    return (
      <StyledBillList container>
        <Column sm={12}>
          <h3>Featured Videos</h3>
          <VideoScroller videos={videos} />
        </Column>
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
