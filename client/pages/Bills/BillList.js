import React from "react"
import styled from "styled-components"
import axios from "axios"
import { connect } from "react-redux"
import { getBills } from "../../ducks/bills"

const StyledBillList = styled.section`
  padding-top: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .bill-video {
    width: 40rem;
    height: 40rem;
    object-fit: cover;
    overflow: hidden;
  }
`

const BillVideo = ({ bill: { fields: { title, video } } }) => (
  <video controls poster="https://picsum.photos/200/300" className="bill-video">
    <source src={video.fields.file.url} />
  </video>
)

class BillList extends React.Component {
  state = {
    selectedBillIndex: 0
  }
  componentDidMount = _ => this.props.getBills()
  render = _ => (
    <StyledBillList className="container">
      {Object.keys(this.props.bills).length > 0 && (
        <React.Fragment>
          <div className="bill-info">
            <p className="subtitle">featured videos</p>
            <p className="title">
              {this.props.bills[this.state.selectedBillIndex].fields.title}
            </p>
          </div>
          <BillVideo
            bill={this.props.bills[this.state.selectedBillIndex]}
            className="bill-list__bill"
          />
        </React.Fragment>
      )}
    </StyledBillList>
  )
}

export default connect(
  state => ({
    bills: state.bills
  }),
  { getBills }
)(BillList)
