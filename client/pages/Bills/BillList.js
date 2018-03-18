import React from "react"
import styled from "styled-components"
import axios from "axios"

const BillVideo = ({ bill }) => (
  <div className="bill-video">
    <video width="320" height="240">
      <source src={bill.fields.video.fields.file.url} />
    </video>
    <p className="title">{bill.fields.title}</p>
  </div>
)

export default class BillList extends React.Component {
  state = {
    bills: []
  }
  componentDidMount = _ => {
    axios("/api/bills").then(({ data }) => {
      console.log(data)
      this.setState({ bills: data.items })
    })
  }
  render = _ => (
    <section className="bill-list">
      hello world
      {this.state.bills.map(bill => <BillVideo bill={bill} />)}
    </section>
  )
}
