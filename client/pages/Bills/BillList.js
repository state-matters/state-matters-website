import React from "react"
import styled from "styled-components"
import axios from "axios"

const StyledBillList = styled.section`
  padding-top: 10rem;
`

const StyledBill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  video {
    width: 40rem;
    height: 40rem;
    object-fit: cover;
    overflow: hidden;
  }
  .video-info {
    padding: 2rem;
    max-width: 40rem;
  }
`

const BillVideo = ({ bill: { fields: { title, video } } }) => (
  <StyledBill>
    <div className="video-info">
      <p className="subtitle">featured videos</p>
      <p className="title">{title}</p>
      <p className="subtitle">{video.fields.description}</p>
    </div>
    <video controls poster="https://picsum.photos/200/300">
      <source src={video.fields.file.url} />
    </video>
  </StyledBill>
)

export default class BillList extends React.Component {
  state = {
    bills: []
  }
  componentDidMount = _ => {
    axios("/api/bills").then(({ data }) => {
      // console.log(data)
      this.setState({ bills: data.items })
    })
  }
  render = _ => (
    <StyledBillList className="container">
      {this.state.bills.map(bill => <BillVideo bill={bill} />)}
    </StyledBillList>
  )
}
