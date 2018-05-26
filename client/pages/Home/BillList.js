import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { connect } from "react-redux"
import { getAllBills } from "ducks/bills"
import Loader from "components/Loader"
import Video from "components/Video"
import Slider from "components/Slider"

const StyledBillList = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  .bill-list__title {
    margin-bottom: 2rem;
  }
`

class BillList extends React.Component {
  state = {
    videos: []
  }
  componentDidMount = _ =>
    this.props.getAllBills().then(_ =>
      this.setState({
        videos: this.props.bills.map(bill => ({
          url: bill.fields.video.fields.file.url,
          poster: bill.fields.poster.fields.file.url,
          title: bill.fields.title,
          billNumber: bill.fields.billNumber
        }))
      })
    )
  render() {
    const {
      props: { loaded },
      state: { videos }
    } = this
    if (!loaded) return <Loader />
    return (
      <StyledBillList className="bill-list">
        <h3 className="bill-list__title">Featured Videos</h3>
        <Slider>
          {videos.map(video => (
            <Slider.Slide className="bill-video" key={video.url}>
              <h2>{video.billNumber}</h2>
              <p>{video.title}</p>
              <Video url={video.url} poster={video.poster} />
            </Slider.Slide>
          ))}
        </Slider>
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
