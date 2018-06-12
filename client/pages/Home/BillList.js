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
  margin: 10rem 0;
  padding: 0;
  .bill__video {
    position: relative;
  }
  .bill__copy {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    color: white;
    z-index: 2;
  }
  .bill__link {
    margin-top: 2rem;
  }
`

class BillList extends React.Component {
  componentDidMount = _ => this.props.getAllBills()
  render() {
    const {
      props: { loaded, bills }
    } = this
    if (!loaded) return <Loader />
    return (
      <StyledBillList className="bill-list">
        <h4 className="bills__title container">Featured Videos</h4>
        <Slider basis={50}>
          {Object.values(bills).map(bill => (
            <div className="bill" key={bill.sys.id}>
              <div className="bill__video">
                <div className="bill__copy">
                  <h2>{bill.fields.billNumber}</h2>
                  <p>{bill.fields.title}</p>
                  <p className="bill__status">
                    Status: {bill.fields.status.fields.status_text}
                  </p>
                </div>
                <Video
                  playButton
                  url={bill.fields.video.fields.file.url}
                  poster={bill.fields.poster.fields.file.url}
                />
              </div>
              <BlockLink
                className="bill__link"
                color={theme.colors.grey["900"]}
                to={`/bills/${bill.sys.id}`}
              >
                Read The Brief
              </BlockLink>
            </div>
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
