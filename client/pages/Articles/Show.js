import React from "react"
import Helmet from "react-helmet"
import { connect } from "react-redux"
import Markdown from "markdown-to-jsx"
import styled from "styled-components"
import theme from "theme"
import { getArticle } from "ducks/articles"
import Loader from "components/Loader"
import { Grid, Column } from "components/Grid"
import { BlockLink } from "components/TouchTarget"

const StyledArticle = styled(Grid)`
  padding: 10rem 1rem;
  min-height: 100vh;
  .article__hero-image {
    max-width: 100%;
  }
  .article__body {
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
  .contributor {
    display: flex;
    align-items: center;
  }
  .contributor__info {
    flex: 1;
    line-height: 2;
  }
  .contributor__image {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    margin-right: 1rem;
    box-shadow: 0 12px 12px -6px rgba(0, 0, 0, 0.12);
  }
  @media (min-width: ${theme.breakPoints.sm}) {
    padding: 10rem 0;
  }
`

class Article extends React.Component {
  state = { loaded: false }
  componentDidMount = () =>
    this.props
      .getArticle(this.props.match.params.article_id)
      .then(() => this.setState({ loaded: true }))
  render = () => {
    const { loaded } = this.state
    if (!loaded)
      return (
        <StyledArticle>
          <Column>
            <Loader />
          </Column>
        </StyledArticle>
      )
    const {
      article: {
        fields: { contributor, photo, title, body }
      }
    } = this.props
    return (
      <StyledArticle container>
        <Column smOffset={1} sm={11}>
          <BlockLink color="black" to="/">
            Back
          </BlockLink>
        </Column>
        <Column smOffset={1} sm={8}>
          <Helmet>
            <title>{title}</title>
            <meta name="article-hero-image" content={photo.fields.file.url} />
          </Helmet>
          <h1>{title}</h1>
          {photo && (
            <img
              className="article__hero-image"
              src={photo.fields.file.url}
              alt="hero image"
            />
          )}
          <Markdown className="article__body">{body}</Markdown>
          {contributor && (
            <React.Fragment>
              <p>About the author: </p>
              <div className="contributor">
                <img
                  className="contributor__image"
                  src={contributor.fields.photo.fields.file.url}
                  alt={`${contributor.fields.name}'s photo`}
                />
                <div className="contributor__info">
                  <p className="name">{contributor.fields.name}</p>
                  <p className="bio">{contributor.fields.bio}</p>
                </div>
              </div>
            </React.Fragment>
          )}
        </Column>
      </StyledArticle>
    )
  }
}

export default connect(
  ({ articles: { items } }, ownProps) => ({
    article: items[ownProps.match.params.article_id]
  }),
  { getArticle }
)(Article)
