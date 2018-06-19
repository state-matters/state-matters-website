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
    @media (min-width: ${theme.breakPoints.sm}) {
      flex-direction: row;
    }
  }
`

class Home extends React.Component {
  render = _ => {
    return (
      <React.Fragment>
        <Hero />
        <LessonList />
        {/* <BillList /> */}
        <AboutUs className="how-it-works">
          <Grid container>
            <Column mdOffset={2} sm={8}>
              <h2>
                {"State government can be confusing. We've got you covered."}
              </h2>
              <div className="home__links">
                <BlockLink color={theme.colors.grey["700"]} to="/about">
                  Contact Us
                </BlockLink>
                <SubscriptionModal />
                <BlockLink color={theme.colors.grey["700"]}>Donate</BlockLink>
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
