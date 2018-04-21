import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import { handleSubscribe } from "ducks/subscriptions"
import SubscriptionForm from "components/SubscriptionForm"
import Text from "components/Text"
import { Grid, Column } from "components/Grid"

import Hero from "./Hero"
import BillList from "./BillList"
import ArticleList from "./ArticleList"
import LessonList from "./LessonList"

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
    this.props.handleSubscribe(this.state.form)
  }

  render = _ => {
    return (
      <React.Fragment>
        <Hero />
        <BillList />
        <section className="how-it-works">
          <Grid container>
            <Column offset={2} span={8}>
              <h2>State government can be confusing. We've got you covered.</h2>
              <ul>
                <li>Contact Us</li>
                <li>Subscribe to Our Newsletter</li>
                <li>Dontate</li>
              </ul>
            </Column>
          </Grid>
        </section>
        <ArticleList />
        <LessonList />
      </React.Fragment>
    )
  }
}

export default connect(state => ({ subscriptions: state.subscriptions }), {
  handleSubscribe
})(Home)
