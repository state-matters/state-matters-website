import React from "react"
import styled from "styled-components"
import VideoScroller from "components/VideoScroller"
import { Grid, Column } from "components/Grid"
import { connect } from "react-redux"
import { getLessons } from "ducks/lessons"

// TODO
// 1. create api endpoint
// 2. consume  api endpoint

const StyledLessonList = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  overflow-x: hidden;
  h4 {
    margin-bottom: 5rem;
  }
  .lesson-grid {
    align-items: end;
  }
  .small-video {
    height: 10rem;
    background-color: black;
  }
`

class LessonList extends React.Component {
  scrollerNode = null
  state = { selected: 0, translate: 0 }
  componentDidMount = _ => this.props.getLessons()
  render = _ => {
    const videos = this.props.loaded
      ? this.props.lessons.map(lesson => ({
          url: lesson.fields.video.fields.file.url,
          poster: "https://placehold.it/400x300"
        }))
      : []
    return this.props.loaded ? (
      <StyledLessonList>
        <div className="container">
          <h3>Educational Videos</h3>
          <h4>Understand Your Government</h4>
        </div>
        <VideoScroller videos={videos} />
      </StyledLessonList>
    ) : (
      <div>loading...</div>
    )
  }
}

export default connect(
  ({ lessons: { items, loaded } }) => ({
    loaded,
    lessons: items
  }),
  { getLessons }
)(LessonList)
