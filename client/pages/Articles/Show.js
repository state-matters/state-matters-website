import React from "react";
import { connect } from "react-redux";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";
import theme from "theme";
import { getArticle } from "ducks/articles";
import Loader from "components/Loader";
import { Grid, Column } from "components/Grid";

const StyledArticle = styled(Grid)`
  padding-top: 10rem;
  .article__hero_image {
    padding-bottom: 62.5%;
    width: 100%;
    background-image: url(${props => props.article_hero_image}),
      linear-gradient(
        ${theme.colors.primary["500"]},
        ${theme.colors.primary["500"]}
      );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .author__image {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-image: url(${props => props.author_image}),
      linear-gradient(
        ${theme.colors.primary["500"]},
        ${theme.colors.primary["500"]}
      );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
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
    font-family: Georgia, Cambria, "Times New Roman", Times, serif;
    letter-spacing: 0.01rem;
    font-weight: 400;
    font-style: normal;
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -0.003em;
  }
  .article__content {
    max-width: 740px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
  }
`;

class Article extends React.Component {
  state = { loaded: false };
  componentDidMount = () =>
    this.props
      .getArticle(this.props.match.params.article_id)
      .then(() => this.setState({ loaded: true }));
  render = () => {
    const { loaded } = this.state;
    const { article } = this.props;
    if (!loaded) return <Loader />;
    return (
      <StyledArticle
        container
        article_hero_image={
          article.fields.photo
            ? article.fields.photo.fields.file.url
            : "no-photo"
        }
        author_image={
          article.fields.contributor.fields.photo.fields.file.url
            ? article.fields.contributor.fields.photo.fields.file.url
            : "no-photo"
        }
      >
        <Column>
          <div className="article__hero_image" />
        </Column>

        <Column>
          <div className="article__content">
            <h1 className="article__title">{article.fields.title}</h1>
            <Markdown>{article.fields.body}</Markdown>
            <Column>
              <h4> About the Author: </h4>
              <div className="author__image" />
                {article.fields.contributor.fields.name}
                <Column>{article.fields.contributor.fields.bio}</Column>      
            </Column>
          </div>
        </Column>
      </StyledArticle>
    );
  };
}

export default connect(
  ({ articles: { items } }, ownProps) => ({
    article: items[ownProps.match.params.article_id]
  }),
  { getArticle }
)(Article);
