import React from "react"
import axios from "axios"
import styled from "styled-components"

const StyledArticle = styled.div``

const Article = ({ article }) => (
  <StyledArticle>
    <h2 className="title">{article.fields.title}</h2>
    {article.fields.contributor && (
      <div className="author-card">
        <span
          className="author-photo"
          style={{
            background: `url(balh)`
          }}
        />
        <p>{article.fields.contributor.fields.name}</p>
      </div>
    )}
  </StyledArticle>
)

class ArticleList extends React.Component {
  state = {
    article_list: []
  }
  componentDidMount() {
    axios("/api/articles").then(({ data }) => {
      document.data = data
      this.setState({ article_list: data.items })
    })
  }
  render() {
    return (
      <ul>
        {this.state.article_list.map(article => <Article article={article} />)}
      </ul>
    )
  }
}

export default ArticleList
