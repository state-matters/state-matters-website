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

const Article = ({ article, className }) => (
  <StyledArticle
    className={className}
    photo={article.photo ? article.photo.fields.file.url : "no-photo"}
  >
    <div className="article-image" />
    <h4>{article.title}</h4>
    {article.contributor && (
      <p className="contributor">{article.contributor.fields.name}</p>
    )}
  </StyledArticle>
)

class ArticleList extends React.Component {
  componentDidMount = () => this.props.getArticles()

  render = () => {
    const head = this.props.articles[0]
    const tail = this.props.articles.slice(1)
    return (
      <ArticleListWrapper container>
        <Column smOffset={1} sm={10}>
          <h4>Featured Articles</h4>
        </Column>
        {this.props.loaded ? (
          <React.Fragment>
            <Column md={5} smOffset={1}>
              <Article key={head.sys.id} article={head.fields} />
            </Column>
            <Column md={5} className="small-article-grid">
              {tail.map(article => (
                <Article
                  key={article.sys.id}
                  article={article.fields}
                  className="small-article"
                />
              ))}
            </Column>
          </React.Fragment>
        ) : (
          <p>loading...</p>
        )}
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
