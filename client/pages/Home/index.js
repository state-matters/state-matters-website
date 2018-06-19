import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import theme from "theme"
import { handleSubscribe } from "ducks/subscriptions"
import { Grid, Column } from "components/Grid"
import { BlockLink, Button } from "components/TouchTarget"
import Modal from "components/Modal"
import Input from "components/Input"

import Hero from "./Hero"
// import BillList from "./BillList"
import ArticleList from "./ArticleList"
import LessonList from "./LessonList"
import SubscriptionBody from "./SubscriptionModal"

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

const LaunchBanner = styled.section`
  margin-top:2rem;
  margin-bottom:2rem;
  padding:3rem;
  .banner__text-body {
    margin:2rem;
    p,
    h3 {
      padding: 2rem 0 0;
    }
  }
  .launch__grid {
    padding:2rem;
    position:relative;
    background-color:${theme.colors.grey["300"]};
    box-shadow: 0 20px 40px 0 rgba(0,0,0,0.1);
    height:350px;
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
  }
  
`


class Home extends React.Component {
  state = {
    form: {
      first_name: "",
      last_name: "",
      email: ""
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.form)
    this.props.handleSubscribe(this.state.form)
  }

  onChange = (field, e) => {
    const value = e.target.value
    this.setState(state => ({ form: { ...state.form, [field]: value } }))
  }

  render = _ => {
    return (
      <React.Fragment>
        <Hero />
        <LaunchBanner>
          <Grid container>
            <Column mdOffset={1} sm={10} className="launch__grid">
              <Grid>
                <Column md={8} sm={6} className="banner__text-body">
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
                <Column md={4} sm={2} className="launch__photo-container">
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
                <BlockLink color={theme.colors.grey["700"]} to="/about">
                  Contact Us
                </BlockLink>
                <Modal
                  body={
                    <SubscriptionBody
                      subscribed={this.props.subscribed}
                      handleSubmit={this.handleSubmit}
                      onChange={this.onChange}
                    />
                  }
                  render={toggle => (
                    <BlockLink
                      color={theme.colors.grey["700"]}
                      onClick={toggle}
                    >
                      Subscribe to Our Newsletter
                    </BlockLink>
                  )}
                />
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
