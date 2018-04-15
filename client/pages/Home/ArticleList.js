import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Grid, Column } from "components/Grid"
import { getArticles } from "ducks/articles"

const ArticleListWrapper = styled(Grid)`
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
    background-color: ${({ theme }) => theme.colors.primary.semiDark};
  }
`

const Article = ({ article, className }) => (
  <StyledArticle className={className}>
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
    console.log(head, tail)
    return (
      <ArticleListWrapper container>
        <Column>
          <h3>Articles</h3>
        </Column>
        {this.props.loaded ? (
          <React.Fragment>
            <Column span={6}>
              <Article key={head.sys.id} article={head.fields} />
            </Column>
            <Column span={6} className="small-article-grid">
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
