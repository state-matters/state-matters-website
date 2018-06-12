import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import theme from "theme"
import Slider from "components/Slider"
import Video from "components/Video"
import Loader from "components/Loader"
import { BlockLink } from "components/TouchTarget"
import { getLessons } from "ducks/lessons"

const StyledLessonList = styled.section`
  margin: 10rem 0;
  overflow-x: hidden;
  .inner-list {
    align-items: center;
  }
  .lesson__title,
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
      <StyledLessonList className="container">
        <div>
          <h4>Educational Videos</h4>
        </div>
        <Slider basis={33} activeBasis={70}>
          {Object.values(lessons).map(({ sys, fields }) => (
            <div className="lesson" key={sys.id}>
              <div className="container">
                <h3 className="lesson__title">{fields.title}</h3>
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
