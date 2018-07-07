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

const LaunchBanner = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  .banner__text-body {
    margin: 2rem;
    p,
    h3 {
      margin: 2rem 0 0;
    }
    h3 {
      margin-bottom: 1rem;
    }
  }
  .launch__grid {
    position: relative;
    background-color: ${theme.colors.grey["300"]};
  }
  .launch__photo-container {
    position: relative;
  }

  .launch__photo {
    display: none;
    background-image: url(./assets/artist_banner.jpg);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    @media (min-width: ${theme.breakPoints.sm}) {
      display: block;
    }
  }

  @media (min-width: ${theme.breakPoints.sm}) {
    margin-top: -10rem;
    .launch__grid {
      box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
    }
  }
`

class Home extends React.Component {
  handleDonate = e => {
    e.preventDefault()
    this.form.submit()
  }
  render = _ => {
    return (
      <React.Fragment>
        <Hero />
        <LaunchBanner>
          <Grid container>
            <Column mdOffset={1} md={10} className="launch__grid">
              <Grid>
                <Column md={8} className="banner__text-body">
                  <p className="banner__title">Announcement</p>
                  <h3 className="banner__header">
                    Are you an artist interested in working with State Matters
                    to make a difference? Come to one of our Artist Q&As July
                    8th - 14th!
                  </h3>
                  <BlockLink
                    color={theme.colors.grey["700"]}
                    href="https://dime.io/events/creative-collective-meet-ups"
                  >
                    RSVP
                  </BlockLink>
                </Column>
                <Column md={4} className="launch__photo-container">
                  <div className="launch__photo" />
                </Column>
              </Grid>
            </Column>
          </Grid>
        </LaunchBanner>
        <LessonList />
        {/* <BillList /> */}
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
