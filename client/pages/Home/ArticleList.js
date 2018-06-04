import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import theme from "theme"
import { Grid, Column } from "components/Grid"
import { getArticles } from "ducks/articles"

const ArticleListWrapper = styled(Grid)`
  margin-top: 10rem;
  margin-bottom: 10rem;
  .small-article-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }
  .small-article {
    grid-column: span 2;
  }
`

const StyledArticle = styled.article`
  position: relative;
  .article-image {
    padding-bottom: 62.5%;
    background-image: url(${props => props.photo}),
      linear-gradient(
        ${theme.colors.primary["500"]},
        ${theme.colors.primary["500"]}
      );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`

const Article = ({ article, className }) => {
  return (
    <StyledArticle
      className={className}
      photo={
        article.fields.photo ? article.fields.photo.fields.file.url : "no-photo"
      }
    >
      <div className="article-image" />
      <h4>{article.title}</h4>
      {article.fields.contributor && (
        <p className="contributor">{article.fields.contributor.fields.name}</p>
      )}
    </StyledArticle>
  )
}

class ArticleList extends React.Component {
  state = {
    head: {},
    tail: [],
    loaded: false
  }
  componentDidMount = () =>
    this.props.getArticles().then(() =>
      this.setState(state => {
        const array = Object.values(this.props.articles)
        const head = array[0]
        const tail = array.slice(1)
        return {
          loaded: true,
          head,
          tail
        }
      })
    )

  render = () => {
    const { head, tail } = this.state
    if (!this.state.loaded) return <p>...loading</p>
    return (
      <ArticleListWrapper container>
        <Column smOffset={1} sm={10}>
          <h4>Featured Articles</h4>
        </Column>
        <Column md={5} smOffset={1}>
          <Article article={head} />
        </Column>
        <Column md={5} className="small-article-grid">
          {tail.map(article => (
            <Article
              key={article.sys.id}
              article={article}
              className="small-article"
            />
          ))}
        </Column>
      </ArticleListWrapper>
    )
  }
}

export default connect(
  ({ articles: { items, loaded } }) => ({
    articles: items,
    loaded
  }),
  { getArticles }
)(ArticleList)
