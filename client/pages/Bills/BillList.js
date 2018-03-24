import React from "react"
import styled from "styled-components"
import axios from "axios"
import { connect } from "react-redux"
import { getAllBills } from "ducks/bills"

const StyledBillList = styled.section`
  padding-top: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 4em;
  .bill-video {
    width: 40rem;
    height: 40rem;
    object-fit: cover;
    overflow: hidden;
  }
`

const BillVideo = ({ video }) => (
  <video controls poster="https://picsum.photos/200/300" className="bill-video">
    <source src={video.fields.file.url} />
  </video>
)

const NextVideo = ({ video }) => <div className="next-video" />

const Loader = props => <div className="loader">loading...</div>

class BillList extends React.Component {
  state = {
    selectedBillIndex: this.props.selectedId || undefined
  }
  componentDidMount = _ => this.props.getAllBills()
  render() {
    const { props: { loaded, selectedId, bills }, state } = this

    if (!loaded) return <Loader />
    return (
      <StyledBillList className="container">
        <div className="bill-info">
          <p className="subtitle">featured videos</p>
          <p className="title">{bills[selectedId].fields.title}</p>
        </div>
        <BillVideo
          video={bills[selectedId].fields.video}
          className="bill-list__bill"
        />
        <NextVideo video={{}} />
      </StyledBillList>
    )
  }
}

export default connect(
  ({ bills: { items, loaded, selectedId } }) => ({
    loaded,
    selectedId,
    bills: items
  }),
  { getAllBills }
)(BillList)
