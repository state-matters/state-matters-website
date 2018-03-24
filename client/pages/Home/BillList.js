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
      background-color: ${({ theme }) => theme.colors.ui.main};
      height: 7.5rem;
      width: 15rem;
      box-shadow: 1rem 1rem 0 0 rgba(243, 126, 90, 0.24);
    }
  }
`

class MainVideo extends React.Component {
  componentDidUpdate = prevProps => {
    if (prevProps.selected !== this.props.selected) {
      this.node.querySelector("#video").load()
    }
  }
  node = null
  render = _ => {
    const { bills, selected } = this.props
    const billVideo = bills[selected].fields.video
    return (
      <div className="main-video" ref={node => (this.node = node)}>
        <video
          id="video"
          controls
          poster="https://picsum.photos/600/400"
          className="bill-video"
        >
          <source src={billVideo.fields.file.url} />
        </video>
      </div>
    )
  }
}

const NextUp = ({ videoIds, changeSelectedVideo }) => (
  <div className="next-up">
    {videoIds.map(id => (
      <div className="video" key={id} onClick={e => changeSelectedVideo(id)} />
    ))}
  </div>
)

class BillList extends React.Component {
  componentDidMount = _ => this.props.getAllBills()
  render() {
    const { props: { loaded, selectedId, bills, idList } } = this
    if (!loaded) return <Loader />
    return (
      <StyledBillList className="container">
        <p className="subtitle">Track Your Bills</p>
        <MainVideo bills={bills} selected={selectedId} />
        <NextUp
          videoIds={idList}
          changeSelectedVideo={this.props.changeSelectedVideo}
        />
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
