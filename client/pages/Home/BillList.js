import React from "react"
import styled from "styled-components"
import theme from "theme"
import { connect } from "react-redux"
import { getAllBills } from "ducks/bills"
import Loader from "components/Loader"
import { BlockLink } from "components/TouchTarget"
import Video from "components/Video"
import Slider from "components/Slider"

const StyledBillList = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  .bill-list__title {
    margin-bottom: 2rem;
  }
  .links {
    margin-top: 2rem;
    text-align: center;
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
          id: bill.sys.id,
          url: bill.fields.video.fields.file.url,
          poster: bill.fields.poster.fields.file.url,
          title: bill.fields.title,
          billNumber: bill.fields.billNumber,
          status: bill.fields.status.fields.status_text
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
        <h4 className="bill-list__title container">Featured Videos</h4>
        <Slider>
          {videos.map(video => (
            <Slider.Slide className="bill-video" key={video.url}>
              <div className="container">
                <h2>{video.billNumber}</h2>
                <p>{video.title}</p>
                <p className="subtitle">Status: {video.status}</p>
              </div>
              <Video playButton url={video.url} poster={video.poster} />
              <div className="links">
                <BlockLink
                  className="read-more"
                  color={theme.colors.grey["900"]}
                  to={`/bills/${video.id}`}
                >
                  Read The Brief
                </BlockLink>
              </div>
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
