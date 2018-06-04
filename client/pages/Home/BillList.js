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
  .bills__title {
    margin: 0 2rem;
  }
  .bill {
    position: relative;
    display: flex;
    flex-direction: column;
    @media (min-width: ${theme.breakPoints.sm}) {
      flex-direction: row;
    }
  }
  .bill__copy {
    margin: 0 2rem 2rem;
    align-self: center;
  }
  .bill__status {
    margin-top: 1rem;
    color: ${theme.colors.primary["500"]};
  }
  .bill__link {
    margin-top: 2rem;
  }
  .bill__video {
    flex-basis: 100%;
  }
  @media (min-width: ${theme.breakPoints.sm}) {
    margin: 10rem auto;
    padding: initial;
    .bills__title {
      margin: 0 0 2rem 0;
    }
    .bill__copy {
      margin: 0 2rem 0 0;
    }
    .bill__video {
      flex-basis: 75%;
    }
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
      <StyledBillList className="bill-list container">
        <h4 className="bills__title">Featured Videos</h4>
        <Slider basis={33} activeBasis={80}>
          {Object.values(bills).map(bill => (
            <Slider.Slide className="bill" key={bill.sys.id} basis={33}>
              <div className="bill__copy">
                <h2>{bill.fields.billNumber}</h2>
                <p>{bill.fields.title}</p>
                <p className="bill__status">
                  Status: {bill.fields.status.fields.status_text}
                </p>
                <BlockLink
                  className="bill__link"
                  color={theme.colors.grey["900"]}
                  to={`/bills/${bill.sys.id}`}
                >
                  Read The Brief
                </BlockLink>
              </div>
              <Video
                className="bill__video"
                playButton
                url={bill.fields.video.fields.file.url}
                poster={bill.fields.poster.fields.file.url}
              />
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
