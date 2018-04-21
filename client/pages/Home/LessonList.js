import React from "react"
import styled from "styled-components"
import Video from "components/Video"
import { Grid, Column } from "components/Grid"
import { connect } from "react-redux"
import { getLessons } from "ducks/lessons"

// TODO
// 1. create api endpoint
// 2. consume  api endpoint

class LessonList extends React.Component {
  componentDidMount = _ => this.props.getLessons()
  render = _ => {
    return (
      <Grid container>
        <Column>hello world</Column>
      </Grid>
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
