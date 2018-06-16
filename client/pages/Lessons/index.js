import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Markdown from "markdown-to-jsx"
import { getLesson } from "ducks/lessons"
import { Grid, Column } from "components/Grid"
import Video from "components/Video"
import Loader from "components/Loader"
import theme from "theme"

const StyledLesson = styled(Grid)`
  margin-top: 10rem;
  margin-bottom: 10rem;
  padding: 1rem;
  h1,
  h2,
  p {
    margin-top: 2rem;
  }
  h2 {
    color: ${theme.colors.grey["700"]};
  }
  img {
    max-width: 100%;
  }
  .lesson__video {
    margin-top: 3rem;
  }
`

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
        <Column sm={8} smOffset={2}>
          <h1>{lesson.fields.title}</h1>
          <Video
            playButton
            ratio={66.66}
            url={lesson.fields.video.fields.file.url}
            poster={lesson.fields.poster.fields.file.url}
            className="lesson__video"
          />
          <Markdown>{lesson.fields.body}</Markdown>
        </Column>
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
