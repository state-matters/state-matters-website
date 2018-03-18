import React from "react"
import axios from "axios"

class FeaturedArticles extends React.Component {
  state = {
    articles: []
  }
  componentDidMount() {
    axios("/api/articles").then(res => {
          document.data=res
          this.setState({articles: res.data.items})
    }


    )
  }
  render(){
    return(
      <ul>
        {this.state.articles.map(
          article => <li> {article.fields.title} </li>
        )}
      </ul>

    )

  }
}

export default FeaturedArticles
