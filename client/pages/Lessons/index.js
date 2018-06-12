import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getLesson } from "ducks/lessons"
import { Grid, Column } from "components/Grid"
import Loader from "components/Loader"

const StyledLesson = styled(Grid)``

class Lesson extends React.Component {
  state = {
    loaded: false
  }
  componentDidMount = () => {
    this.props
      .getLesson(this.props.match.params.lesson_id)
      .then(() => this.setState({ loaded: true }))
  }
  render = () => {
    const { loaded } = this.state
    const { lesson } = this.props
    if (!loaded) return <Loader />
    return (
      <StyledLesson container>
        <Column sm={12}>hello {this.props.match.params.lesson_id}</Column>
      </StyledLesson>
    )
  }
}

export default connect(
  ({ lessons: { items } }, ownProps) => ({
    lesson: items[ownProps.match.params.lesson_id]
  }),
  { getLesson }
)(Lesson)
