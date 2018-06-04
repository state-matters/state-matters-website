import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import theme from "theme"
import { Grid, Column } from "components/Grid"
import Loader from "components/Loader"
import { BlockLink } from "components/TouchTarget"
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
      <h4>{article.fields.title}</h4>
      {article.fields.contributor && (
        <p className="contributor">{article.fields.contributor.fields.name}</p>
      )}
      <BlockLink to={`/articles/${article.sys.id}`}>read more</BlockLink>
    </StyledArticle>
  )
}

class ArticleList extends React.Component {
  componentDidMount = () => this.props.getArticles()

  render = () => {
    const { articles, loaded } = this.props
    const articlesArray = Object.values(articles)
    // first article
    const head = articlesArray[0]
    // copy because slice mutates articlesArray.
    const tail = [...articlesArray.slice(1)]
    if (!loaded) return <Loader />
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
