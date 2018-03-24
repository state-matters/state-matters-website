import React from "react"
import styled from "styled-components"
import axios from "axios"
import { connect } from "react-redux"
import { getAllBills, changeSelectedVideo } from "ducks/bills"
import Loader from "components/Loader"

const StyledBillList = styled.section`
  padding-top: 10rem;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakPoints.md};
  .bill-video {
    display: block;
    width: 100%;
    object-fit: cover;
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

class MainVideo extends React.Component {
  componentDidUpdate = prevProps => {
    if (prevProps.selected !== this.props.selected) {
      this.video.load()
    }
  }
  node = null
  render = _ => {
    const { bills, selected } = this.props
    const billVideo = bills[selected].fields.video
    return (
      <div className="main-video">
        <video
          id="video"
          ref={node => (this.video = node)}
          poster={bills[selected].fields.poster.fields.file.url}
          className="bill-video"
        >
          <source src={billVideo.fields.file.url} />
        </video>
      </div>
    )
  }
}

class BillList extends React.Component {
  componentDidMount = _ => this.props.getAllBills()
  render() {
    const {
      props: { loaded, selectedId, bills, idList, changeSelectedVideo }
    } = this
    if (!loaded) return <Loader />
    return (
      <StyledBillList className="container">
        <p className="subtitle">Track Your Bills</p>
        <MainVideo bills={bills} selected={selectedId} />
        <div className="next-up">
          {idList.map(id => (
            <div
              className={`video ${id === selectedId ? "active" : ""}`}
              key={id}
              onClick={e => changeSelectedVideo(id)}
              style={{
                backgroundImage: `url(${
                  bills[id].fields.poster.fields.file.url
                })`
              }}
            />
          ))}
        </div>
      </StyledBillList>
    )
  }
}

export default connect(
  ({ bills: { items, loaded, selectedId, idList } }) => ({
    loaded,
    selectedId,
    bills: items,
    idList
  }),
  { getAllBills, changeSelectedVideo }
)(BillList)
