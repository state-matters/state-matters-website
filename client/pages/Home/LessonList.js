import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import theme from "theme"
import Slider from "components/Slider"
import Video from "components/Video"
import { BlockLink } from "components/TouchTarget"
import { getLessons } from "ducks/lessons"

// TODO
// 1. create api endpoint
// 2. consume  api endpoint

const StyledLessonList = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  overflow-x: hidden;
  .lesson__title,
  .lesson__video,
  .lesson__link {
    margin-top: 2rem;
  }
`

class LessonList extends React.Component {
  scrollerNode = null
  state = { selected: 0, translate: 0, videos: [] }
  setVideos = _ =>
    this.setState({
      videos: this.props.lessons.map(lesson => ({
        id: lesson.sys.id,
        url: lesson.fields.video.fields.file.url,
        poster: lesson.fields.poster,
        title: lesson.fields.title
      }))
    })
  componentDidMount = _ => this.props.getLessons().then(this.setVideos)
  render = _ => {
    const { videos } = this.state
    if (!this.props.loaded) return <div>loading...</div>
    return (
      <StyledLessonList>
        <div className="container">
          <h4>Educational Videos</h4>
        </div>
        <Slider basis={33} activeBasis={80}>
          {videos.map(video => (
            <Slider.Slide className="lesson-video" key={video.id}>
              <div className="container">
                <h2 className="lesson__title">{video.title}</h2>
              </div>
              <Video
                className="lesson__video"
                playButton
                url={video.url}
                poster={video.poster}
              />
              <div className="container">
                <BlockLink
                  className="lesson__link"
                  color={theme.colors.grey["900"]}
                  to={`/lessons/${video.id}`}
                >
                  Learn you some good.
                </BlockLink>
              </div>
            </Slider.Slide>
          ))}
        </Slider>
      </StyledLessonList>
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
