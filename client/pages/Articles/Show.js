import React from "react"
import { connect } from "react-redux"
import Markdown from "markdown-to-jsx"
import styled from "styled-components"
import { getArticle } from "ducks/articles"
import Loader from "components/Loader"
import { Grid, Column } from "components/Grid"

const StyledArticle = styled(Grid)`
  padding-top: 10rem;
  margin-bottom: 5rem;
  img {
    max-width: 100%;
  }
  h1,
  h2 {
    margin-top: 2rem;
  }
  p {
    margin-top: 4rem;
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
    const { article } = this.props
    if (!loaded) return <Loader />
    return (
      <StyledArticle container>
        <Column>
          <Markdown>{article.fields.body}</Markdown>
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
