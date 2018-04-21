import React from "react"
import styled from "styled-components"
import Video from "components/Video"
import { Grid, Column } from "components/Grid"
import { connect } from "react-redux"
import { getLessons } from "ducks/lessons"

// TODO
// 1. create api endpoint
// 2. consume  api endpoint

const StyledLessonList = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
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
  componentDidMount = _ => this.props.getLessons()
  render = _ => {
    return this.props.loaded ? (
      <StyledLessonList className="container">
        <h3>Educational Videos</h3>
        <h4>Understand Your Government</h4>
        <Grid className="lesson-grid">
          <Column md={6}>
            <Video url={this.props.lessons[0].fields.video.fields.file.url} />
          </Column>
          <Column md={2} className="small-video">
            another video
          </Column>
          <Column md={2} className="small-video">
            another video
          </Column>
          <Column md={2} className="small-video">
            another video
          </Column>
        </Grid>
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
