import React from "react"
import axios from "axios"

class FeaturedArticles extends React.Component {
  state = {
    articles_data: []
  }
  componentDidMount() {
    axios("/api/articles").then(res => {
          document.data=res
          this.setState({articles_data: res.data.items})
    }


    )
  }
  render(){
    return(
      <ul>
        {this.state.articles_data.map(
          article => (
            <li>
            {JSON.stringify(article)}
            {/* {article.fields.title} */}
            </li>)
        )}
      </ul>

    )

  }
}

export default FeaturedArticles
