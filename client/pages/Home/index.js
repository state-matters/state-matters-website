import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Donate from "components/Donate"
import theme from "theme"
import { handleSubscribe } from "ducks/subscriptions"
import { Grid, Column } from "components/Grid"
import { BlockLink } from "components/TouchTarget"
import SubscriptionModal from "components/SubscriptionModal"
import ContactModal from "components/ContactModal"

import Hero from "./Hero"
// import BillList from "./BillList"
import ArticleList from "./ArticleList"
import LessonList from "./LessonList"

const AboutUs = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  text-align: center;
  .home__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0 0;
    padding: 0;
    justify-content: space-around;
    a {
      color: inherit;
      text-decoration: none;
    }
    @media (min-width: ${theme.breakPoints.sm}) {
      flex-direction: row;
    }
  }
`

const BannerWrapper = styled.section`
  position: relative;
  display: flex;
  margin: 1rem;
  flex-direction: column-reverse;
  background-color: ${theme.colors.grey["100"]};
  z-index: 1;
  .banner__text {
    padding: 1rem;
    align-self: center;
  }
  .banner__img {
    display: block;
    max-width: calc(100% - 2rem);
  }
  @media (min-width: 40rem) {
    flex-direction: row;
    margin: -10rem auto 0;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.12);
    .banner__text {
      padding: 4rem;
    }
    .banner__img {
      max-height: 30rem;
    }
  }
`

const Banner = props => (
  <BannerWrapper className="container">
    <div className="banner__text">{props.children}</div>
    <img className="banner__img" src={props.img} />
  </BannerWrapper>
)

class Home extends React.Component {
  handleDonate = e => {
    e.preventDefault()
    this.form.submit()
  }
  render = _ => {
    return (
      <React.Fragment>
        <Hero />
        <Banner img="/assets/banner_01302019.png">
          <h3>Chicago has an election February 26th.</h3>
          <p>
            So, the Chicago election is February 26th, and you want to research the candidates, but
            you're having trouble finding the right resources. We gathered up the best of the best
            to aid you in your quest.
            <BlockLink color="#000" to="/chicago">
              Go to the resource roundup.
            </BlockLink>
          </p>
        </Banner>
        <LessonList />
        <AboutUs className="how-it-works">
          <Grid container>
            <Column mdOffset={2} sm={8}>
              <h2>State government can be confusing. We've got you covered.</h2>
              <div className="home__links">
                <ContactModal />
                <SubscriptionModal />
                <Donate>
                  {props => (
                    <BlockLink {...props} className="primary">
                      Donate
                    </BlockLink>
                  )}
                </Donate>
              </div>
            </Column>
          </Grid>
        </AboutUs>
        <ArticleList />
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({ subscribed: state.subscriptions.subscribed }),
  {
    handleSubscribe
  }
)(Home)
