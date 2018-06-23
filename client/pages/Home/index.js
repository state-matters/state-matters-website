import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import theme from "theme"
import { handleSubscribe } from "ducks/subscriptions"
import { Grid, Column } from "components/Grid"
import { BlockLink } from "components/TouchTarget"
import SubscriptionModal from "components/SubscriptionModal"

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
  margin-top:-10rem;
  margin-bottom:2rem;
  .banner__text-body {
    margin:2rem;
    p,
    h3 {
      padding: 2rem 0 0;
    }
  }
  .launch__grid {
    position:relative;
    background-color:${theme.colors.grey["300"]};
    box-shadow: 0 20px 40px 0 rgba(0,0,0,0.1);
  }
  .launch__photo-container {
    position: relative;
  }
  .launch__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    @media (max-width: 40rem) {
      display:none;
    }
  }
  @media (max-width: 40rem) {
    margin-top:2rem;
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
                <Column md={9} className="banner__text-body">
                  <p className="banner__title">Announcement</p>
                  <h3 className="banner__header">
                    State Matters is hosting a launch party on June 27th!
                  </h3>
                <BlockLink 
                  color={theme.colors.grey["700"]} 
                  href="https://sleeping-village.com/calendar/state-matters-launch-party/">
                  RSVP
                </BlockLink>
                </Column>
                <Column md={3} className="launch__photo-container">
                  <img
                    src="./assets/launch_party.jpg"
                    alt="Launch Party"
                    className="launch__photo"
                  />
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
              <h2>
                {"State government can be confusing. We've got you covered."}
              </h2>
              <div className="home__links">
                <BlockLink color={theme.colors.grey["700"]}>
                  <a href="mailto:info@statematters.org">Contact Us</a>
                </BlockLink>
                <SubscriptionModal />
                <BlockLink
                  color={theme.colors.grey["700"]}
                  onClick={this.handleDonate}
                >
                  <span>Donate</span>
                  <form
                    ref={node => (this.form = node)}
                    style={{ display: "none" }}
                    action="https://state-matters.funraise.org"
                    method="get"
                    target="_top"
                  >
                    <input type="hidden" name="cmd" defaultValue="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      defaultValue="7TN8BEBTJMZXQ"
                    />
                  </form>
                </BlockLink>
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
