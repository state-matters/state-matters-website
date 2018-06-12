import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import theme from "theme"
import { Link } from "react-router-dom"
import Slider from "components/Slider"
import Video from "components/Video"
import Loader from "components/Loader"
import { getLessons } from "ducks/lessons"

const StyledLessonList = styled.section`
  margin: 10rem 0;
  overflow-x: hidden;
  .inner-list {
    align-items: center;
  }
  .lesson {
    position: relative;
  }
  .lesson__title {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    color: white;
    z-index: 2;
    text-decoration: none;
  }
  .lesson__video,
  .lesson__link {
    margin-top: 2rem;
  }
  .lesson:not(:first-of-type) .lesson__title {
    display: none;
  }
  @media (min-width: ${theme.breakPoints.sm}) {
    margin: 10rem auto;
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
        <Slider basis={33}>
          {Object.values(lessons).map(({ sys, fields }) => (
            <div className="lesson" key={sys.id}>
              <Link className="lesson__title" to={`/lessons/${sys.id}`}>
                <h3>{fields.title}</h3>
              </Link>
              <Video
                className="lesson__video"
                playButton
                url={fields.video.fields.file.url}
                poster={fields.poster.fields.file.url}
              />
            </div>
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
