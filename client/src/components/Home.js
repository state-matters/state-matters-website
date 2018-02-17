import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Helmet from "react-helmet"
import heroImage from "../assets/hero-image.jpg"
import dropShadow from "../assets/shadow_pattern.png"

import { handleSubscribe } from "../ducks/subscriptions"

import SubscriptionForm from "./SubscriptionForm"

import Text from "./Text"

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
  max-height: var(--lg);
  overflow: hidden;
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
  render = _ => {
    return (
      <React.Fragment>
        <Helmet title="State Matters | Track your state government" />
        <Hero>
          <Text type="headline">
            We're on a mission to<br />unmess state government.
          </Text>
          <Text type="subtitle" className="title">
            We’re tired of working up a sweat just figuring out what’s going on
            in our own state - so we’re doing something about it.
          </Text>

          <select name="" id="">
            <option value="state-1">Illinois</option>
            <option value="state-2">Michigan</option>
            <option value="state-3">Wisconsin</option>
          </select>
        </Hero>
        <section className="subscribe">
          <h4>Sign up to recieve your content directly in your inbox!</h4>
          <SubscriptionForm
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
        </section>
      </React.Fragment>
    )
  }
}

export default connect(state => ({ subscriptions: state.subscriptions }), {
  handleSubscribe
})(Home)
