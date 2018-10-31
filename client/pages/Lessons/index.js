import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Markdown from "markdown-to-jsx"
import { getLesson } from "ducks/lessons"
import { Grid, Column } from "components/Grid"
import Video from "components/Video"
import Loader from "components/Loader"
import theme from "theme"
import YouTube from 'react-youtube'

const StyledLesson = styled(Grid)`
  padding: 10rem 1rem;
  min-height: 100vh;
  .lesson__body {
    margin-bottom: 2rem;
    h2,
    h3,
    h4 {
      margin-top: 4rem;
    }
    p {
      margin-top: 2rem;
      line-height: 2;
    }
    img {
      max-width: 100%;
    }
  }
  .lesson__video {
    margin-top: 3rem;
  }
  @media (min-width: ${theme.breakPoints.sm}) {
    padding: 10rem 0;
  }
`


class Lesson extends React.Component {

  pickVideo() {
    const { lesson } = this.props
    if(lesson.fields.youTubeId) {
      return(
        <YouTube
          videoId={lesson.fields.youTubeId}
          />
      )

    } else {
    return (
      <Video
        playButton
        ratio={66.66}
        url={lesson.fields.video.fields.file.url}
        poster={lesson.fields.poster.fields.file.url}
        className="lesson__video"
      />
  )
  }
}
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
        <Column sm={8} smOffset={1}>
          <h1>{lesson.fields.title}</h1>
          {this.pickVideo()}

          <Markdown className="lesson__body">{lesson.fields.body}</Markdown>
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
