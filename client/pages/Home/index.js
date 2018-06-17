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
