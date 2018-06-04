import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import theme from "theme"
import Slider from "components/Slider"
import Video from "components/Video"
import Loader from "components/Loader"
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
  state = { selected: 0, translate: 0 }
  componentDidMount = _ => this.props.getLessons()
  render = _ => {
    const { lessons, loaded } = this.props
    if (!loaded) return <Loader />
    return (
      <StyledLessonList>
        <div className="container">
          <h4>Educational Videos</h4>
        </div>
        <Slider basis={33} activeBasis={80}>
          {Object.values(lessons).map(({ sys, fields }) => (
            <Slider.Slide className="lesson-video" key={sys.id}>
              <div className="container">
                <h2 className="lesson__title">{fields.title}</h2>
              </div>
              <Video
                className="lesson__video"
                playButton
                url={fields.video.fields.file.url}
                poster={fields.poster.fields.file.url}
              />
              <div className="container">
                <BlockLink
                  className="lesson__link"
                  color={theme.colors.grey["900"]}
                  to={`/lessons/${sys.id}`}
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
